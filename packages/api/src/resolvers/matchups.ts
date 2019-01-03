import { MatchupResolvers } from "../generated/graphqlgen";
import { Matchup as MatchupModel } from "models";
import { prisma, FlipPosition } from "@ffb/prisma";
import gql from "graphql-tag";
export const Matchup: MatchupResolvers.Type = {
    ...MatchupResolvers.defaultResolvers
};

export async function getMatchups(gameID: number): Promise<MatchupModel[]> {
    const query = `
        query GetFlipGamePlayers($id: Int!) {
            flipGamePlayers(where:{game:{id:$id}}) {
                id,
                team {
                    id
                },
                position,
                player{
                    id
                }
            }
        }`;

    const homeTeamID = (await prisma.nflGame({ id: gameID }).home_team()).id;
    const awayTeamID = (await prisma.nflGame({ id: gameID }).away_team()).id;
    const flipGamePlayers = (await prisma.$graphql(query, {id: gameID})).flipGamePlayers;
    const positions: FlipPosition[] = flipGamePlayers.map(player => player.position);
    const uniquePositions = [...new Set(positions)];
    const matchups = uniquePositions.map(uniquePosition => {
        const homeFlipGamePlayer = flipGamePlayers.find(player => player.position === uniquePosition && player.team.id === homeTeamID);
        const awayFlipGamePlayer = flipGamePlayers.find(player => player.position === uniquePosition && player.team.id === awayTeamID);
        if (!homeFlipGamePlayer || !awayFlipGamePlayer) throw new Error("Unable to create matchup - players invalid");
        return {
            position: uniquePosition,
            homePlayer: prisma.nflPlayer({id: homeFlipGamePlayer.player.id}),
            awayPlayer: prisma.nflPlayer({id: awayFlipGamePlayer.player.id})
        }
    })
    return matchups;
}
