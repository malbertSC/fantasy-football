import Axios from "axios";
import { prisma, Nfl_playerCreateInput } from "@ffb/prisma";

const fantasyPositions = ["WR", "RB", "TE", "QB", "K"];

interface NFLFeedPlayer {
    nflId: number;
    status: "ACT" | "CUT" | "DEV" | "RES";
    displayName: string;
    firstName: string;
    lastName: string;
    esbId: string;
    gsisId: string;
    positionGroup: string;
    position: string;
    teamId: string;
}

export async function loadPlayers() {
    const teams = await prisma.nfl_teams();
    const teamNFLIDs = teams.map(team => team.nfl_feed_id);
    for (const teamNFLID of teamNFLIDs) {
        const playerResponse = await Axios.get(`https://feeds.nfl.com/feeds-rs/roster/${teamNFLID}.json`);
        const allPlayers: NFLFeedPlayer[] = playerResponse.data.teamPlayers;
        const fantasyPlayers = allPlayers.filter(player => fantasyPositions.includes(player.position));
        const players = fantasyPlayers.map(fantasyPlayer => {
            const player: Nfl_playerCreateInput = {
                first_name: fantasyPlayer.firstName,
                last_name: fantasyPlayer.lastName,
                display_name: fantasyPlayer.displayName,
                nfl_feed_id: fantasyPlayer.nflId.toString(),
                nfl_team: {
                    connect: {
                        nfl_feed_id: fantasyPlayer.teamId
                    }
                },
                esb_id: fantasyPlayer.esbId,
                gsis_id: fantasyPlayer.gsisId,
                position_group: fantasyPlayer.positionGroup,
                position: fantasyPlayer.position,
                status: fantasyPlayer.status
            };
            return player;
        })
        await Promise.all(players.map(player => prisma.upsertNfl_player({
            where: {
                nfl_feed_id: player.nfl_feed_id
            },
            create: player,
            update: player
        })));
    }
    return;
    // console.log(teams);
}
