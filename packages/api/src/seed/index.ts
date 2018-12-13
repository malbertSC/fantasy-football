import { loadTeams } from "./teams";
import { loadPlayers } from "./players";
import { loadGames } from "./games";

export async function seed() {
    console.log("seeding teams");
    await loadTeams(2018);
    console.log("seeding players");
    await loadPlayers();
    console.log("seeding games");
    await loadGames();
}
