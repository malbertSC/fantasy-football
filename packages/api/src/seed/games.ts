import axios from "axios";
import { prisma, NflGameCreateInput } from "@ffb/prisma";

interface FeedGameData {
    season: number;
    seasonType: "PRE" | "REG";
    week: number;
    gameId: number;
    gameKey: number;
    isoTime: number;
    homeTeamId: string;
    visitorTeamId: string;
    gameType: "PRE" | "REG";
}

export async function loadGames() {
    const url = "https://feeds.nfl.com/feeds-rs/schedules.json"
    const response = await axios.get(url);
    const allGamesSchedule: FeedGameData[] = response.data.gameSchedules;
    // const teams = await prisma.nflTeams();

    const games = allGamesSchedule.map(game => {
        const newGame: NflGameCreateInput = {
            home_team: {
                connect: {
                    nfl_feed_id: Number(game.homeTeamId)
                }
            },
            away_team: {
                connect: {
                    nfl_feed_id: Number(game.visitorTeamId)
                }
            },
            week: game.week,
            season: game.season,
            season_type: game.seasonType,
            nfl_feed_id: game.gameId,
            nfl_feed_key: game.gameKey,
            start: new Date(game.isoTime)
        }
        return newGame
    })

    await Promise.all(games.map(game => prisma.upsertNflGame({
        where: {
            nfl_feed_id: game.nfl_feed_id
        },
        create: game,
        update: game
    })));

}
