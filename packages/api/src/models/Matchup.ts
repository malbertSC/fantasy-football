import { NflPlayer, FlipPosition } from "@ffb/prisma";

// jank: FlipPosition doesn't work here for some reason so using the copied string literal for position
export interface Matchup {
    position: "QB" | "WR1" | "WR2" | "RB" | "TE";
    homePlayer: Promise<NflPlayer>;
    awayPlayer: Promise<NflPlayer>;
}
