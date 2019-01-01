import * as csvtojson from "csvtojson";
import { prisma, FlipGamePlayerCreateInput } from "@ffb/prisma";
import { getTeamByFuzzyAbbreviation } from "./fantasypros-teams";
import { getPlayerByFuzzyName, PlayerInvalidError } from "./fantasypros-players";
import { PositionOption } from "seed/flip-team-players";

export interface DepthChartPlayer {
    teamID: number;
    playerID: number;
}

interface FantasyProsPlayer {
    Player: string;
    Team: string;
}

export type DepthChart = DepthChartPlayer[][];

// tslint:disable-next-line:max-line-length
export async function getFlipGamePlayers(fantasyProsDepthChartFile: string, week: number, positionOption: PositionOption): Promise<FlipGamePlayerCreateInput[]> {
    const depthChart = await buildDepthCharts(fantasyProsDepthChartFile, positionOption);
    const gamePlayers = await buildGamePlayers(week, depthChart, positionOption);
    return gamePlayers;
}

function addPlayerToDepthChart(depthChart: DepthChart, newPlayer: DepthChartPlayer): DepthChart {
    const updatedDepthChart = depthChart.slice();
    for (let depth = 0; depth <= depthChart.length; depth++) {
        if (!depthChart[depth]) {
            updatedDepthChart.push([]);
            updatedDepthChart[depth].push(newPlayer);
            break;
        } else if (!depthChart[depth].some(depthChartPlayer => depthChartPlayer.teamID === newPlayer.teamID)) {
            updatedDepthChart[depth].push(newPlayer);
            break;
        }
    }
    return updatedDepthChart;

}

function isDepthChartComplete(depthChart: DepthChart) {
    return depthChart[0]
        && depthChart[0].length === 32
        && depthChart[1]
        && depthChart[1].length === 32;
}

async function buildDepthCharts(fileName: string, positionOption: PositionOption): Promise<any> {
    let depthChart: DepthChart = [];
    const players: FantasyProsPlayer[] = await csvtojson().fromFile(fileName);
    for (const player of players) {
        if (isDepthChartComplete(depthChart)) break;
        if (!player.Team || !player.Player) continue;
        let nflPlayer;
        try {
            nflPlayer = await getPlayerByFuzzyName(player.Player, positionOption.position);
        } catch (err) {
            if (!(err instanceof PlayerInvalidError)) {
                throw err;
            } else console.error(err.message);
        }
        if (!nflPlayer) continue;
        const depthChartPlayer: DepthChartPlayer = {
            teamID: (await getTeamByFuzzyAbbreviation(player.Team)).id,
            playerID: (await getPlayerByFuzzyName(player.Player, positionOption.position)).id,
        };
        depthChart = addPlayerToDepthChart(depthChart, depthChartPlayer);
    }
    return depthChart;
}

// tslint:disable-next-line:max-line-length
async function buildGamePlayers(week: number, depthChart: DepthChart, positionOption: PositionOption): Promise<FlipGamePlayerCreateInput[]> {
    const weekGames = await prisma.nflGames({where: {week}});
    const depthChartLevel = depthChart[positionOption.depth];
    console.log("BUILDING DEPTH CHART LEVEL ", positionOption);
    const flipGamePlayers: FlipGamePlayerCreateInput[] = [];
    for (const game of weekGames) {
        const awayTeam = await prisma.nflGame({id: game.id}).away_team();
        const homeTeam = await prisma.nflGame({id: game.id}).home_team();
        const depthChartGamePlayers = depthChartLevel.filter(depthChartPlayer => [awayTeam.id, homeTeam.id].includes(depthChartPlayer.teamID));
        for (const depthChartPlayer of depthChartGamePlayers) {
            const gamePlayer: FlipGamePlayerCreateInput = {
                player: {connect: {id: depthChartPlayer.playerID}},
                team: {connect: {id: depthChartPlayer.teamID}},
                position: positionOption.flipPosition,
                game: {connect: {id: game.id}}
            };
            flipGamePlayers.push(gamePlayer);
        }
    }
    return flipGamePlayers;
}
