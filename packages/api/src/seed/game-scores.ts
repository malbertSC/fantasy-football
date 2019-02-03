import axios from "axios";
import { prisma, FlipGamePlayer } from "@ffb/prisma";

interface FlipGamePlayerWithPlayer extends FlipGamePlayer {
    player: {
        id: number;
        gsis_id: string;
    }
}
async function getFlipPlayersWithNflGame(gameID: number): Promise<FlipGamePlayerWithPlayer[]> {
    const query = `
        query GetFlipGamePlayers($id: Int!) {
            flipGamePlayers(where:{game:{id:$id}}) {
                id,
                position,
                player{
                    id,
                    gsis_id
                },
                projected_score,
                actual_score
            }
        }`;
    const result = await prisma.$graphql(query, {id: gameID});
    return result.flipGamePlayers;
}

// todo: this shouldn't be hardcoded
const leagueSettings = {
    passing: {
        tds: 4,
        yds: .04,
        ints: -2,
        twoptm: 2
    },
    receiving: {
        tds: 6,
        yds: .1,
        twoptm: 2
    },
    rushing: {
        tds: 6,
        yds: .1,
        twoptm: 2
    },
    fumbles: {
        lost: -2
    }
}

async function getGameStats(gameEID: number) {
    const gameStatsResponse = await axios.get(`http://www.nfl.com/liveupdate/game-center/${gameEID}/${gameEID}_gtd.json`);
    return gameStatsResponse.data;
}

async function updateGameScore(nflWeek: number) {
    const nflGames = await prisma.nflGames({where: {week: nflWeek}});
    for (const nflGame of nflGames) {
        const gameEID = nflGame.nfl_feed_id;
        const gameStats = await getGameStats(gameEID);
        const flipGamePlayers = await getFlipPlayersWithNflGame(nflGame.id);
        const playerPoints = getPlayerStats(gameStats[gameEID]);
        await updateFlipGamePlayers(flipGamePlayers, playerPoints);
    }
}

function roundToDecimal(number: number, decimalPlace: number) {
    const multipliedNumber = number * 10 * decimalPlace;
    const roundedMultipliedNumber = Math.round(multipliedNumber);
    return roundedMultipliedNumber / (10 * decimalPlace);
}

async function updateFlipGamePlayers(flipGamePlayers: FlipGamePlayerWithPlayer[], playerPoints: PlayerPoints[]) {
    for (const flipGamePlayer of flipGamePlayers) {
        const playerScore = playerPoints.find(playerPoint => {
            return playerPoint.gisID === flipGamePlayer.player.gsis_id;
        });
        const actualScore = playerScore ? roundToDecimal(playerScore.points, 1) : 0;
        await prisma.updateFlipGamePlayer({where: {id: flipGamePlayer.id}, data: {
            actual_score: actualScore
        }});
    }
}

function getPlayerStats(gameStats: any): PlayerPoints[] {
    const teams = ["home", "away"];
    let playerPoints = [];
    teams.forEach((team: any) => {
        playerPoints = playerPoints.concat(parsePositionStats(gameStats[team].stats));
    })
    return playerPoints;

}

function parsePositionStats(teamStats: any) {
    const passingPoints = calculateCategoryPoints(teamStats.passing, "passing");
    const receivingPoints = calculateCategoryPoints(teamStats.receiving, "receiving");
    const rushingPoints = calculateCategoryPoints(teamStats.rushing, "rushing");
    const fumblesPoints = calculateCategoryPoints(teamStats.fumbles, "fumbles");
    const playerPoints = combinePlayerPoints([passingPoints, receivingPoints, rushingPoints, fumblesPoints]);
    return playerPoints;
}

interface PlayerPoints {
    gisID: string;
    points: number;
}
function combinePlayerPoints(pointsArrays: PlayerPoints[][]): PlayerPoints[] {
    // console.log(pointsArrays);
    const combinedPlayerPoints: PlayerPoints[] = [];
    for (const pointsArray of pointsArrays) {
        for (const playerPoint of pointsArray) {
            const combinedPlayerPoint = combinedPlayerPoints.find((combinedPlayerPointIter) => combinedPlayerPointIter.gisID === playerPoint.gisID);
            if (combinedPlayerPoint) {
                combinedPlayerPoint.points += playerPoint.points;
            } else {
                combinedPlayerPoints.push(playerPoint);
            }
        }
    }
    return combinedPlayerPoints;

}

function calculateCategoryPoints(stats: any, category: string): PlayerPoints[] {
    // console.log(stats);
    const categorySettings = leagueSettings[category];
    if (!stats) {
        return [];
    }
    return Object.keys(stats).map((playerKey: string) => {
        const playerStats = stats[playerKey];
        const points = Object.keys(playerStats).map((statKey) => {
            if (categorySettings[statKey]) {
                return {
                    stat: statKey,
                    points: playerStats[statKey] * categorySettings[statKey]
                }
            }
        })
        return {
            gisID: playerKey,
            points: points.reduce((accum, current) => {
                if (current) accum += current.points;
                return accum;
            }, 0)
        }
    })
}

updateGameScore(15);
