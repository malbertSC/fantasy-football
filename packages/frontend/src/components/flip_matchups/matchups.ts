import { GetFlipGameMatchup_flipGamePlayers } from "../__generated__/GetFlipGameMatchup";
import { GetWeekGames_nflGames } from "../__generated__/GetWeekGames";

export interface FlipGameMatchup {
    position: string;
    home: GetFlipGameMatchup_flipGamePlayers;
    away: GetFlipGameMatchup_flipGamePlayers;
}

export function getMatchups(game: GetWeekGames_nflGames, players: GetFlipGameMatchup_flipGamePlayers[]): FlipGameMatchup[] {
    const homeTeamID = game.home_team.id;
    const awayTeamID = game.away_team.id;
    const positions = players.map(player => player.position);
    const uniquePositions = [...new Set(positions)];
    return uniquePositions.map(uniquePosition => {
        const homePlayer = players.find(player => player.position === uniquePosition && player.team.id === homeTeamID);
        const awayPlayer = players.find(player => player.position === uniquePosition && player.team.id === awayTeamID);
        if (!homePlayer || !awayPlayer) throw new Error("Unable to create matchup - players invalid");
        return {
            position: uniquePosition,
            home: homePlayer,
            away: awayPlayer
        }
    })
}
