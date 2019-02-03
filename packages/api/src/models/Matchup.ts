import { NflPlayer, FlipPosition, prisma } from "@ffb/prisma";

// jank: FlipPosition doesn't work here for some reason so using the copied string literal for position
export interface Matchup {
    position: "QB" | "WR1" | "WR2" | "RB" | "TE";
    homePlayer: MatchupPlayer;
    awayPlayer: MatchupPlayer;
}
export interface MatchupPlayer {
    nflPlayer: Promise<NflPlayer>;
    projectedScore: number;
    actualScore: number;
}

export async function getMatchups(gameID: number): Promise<Matchup[]> {
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
                },
                projected_score,
                actual_score
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
            homePlayer: {
                nflPlayer: prisma.nflPlayer({id: homeFlipGamePlayer.player.id}),
                projectedScore: homeFlipGamePlayer.projected_score,
                actualScore: homeFlipGamePlayer.actual_score
            },
            awayPlayer: {
                nflPlayer: prisma.nflPlayer({id: awayFlipGamePlayer.player.id}),
                projectedScore: awayFlipGamePlayer.projected_score,
                actualScore: awayFlipGamePlayer.actual_score
            }
        }
    })
    return matchups;
}
