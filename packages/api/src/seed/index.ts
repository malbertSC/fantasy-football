import { loadTeams } from "./teams";
import { loadPlayers } from "./players";

export async function seed() {
    await loadTeams(2018);
    await loadPlayers();
}
