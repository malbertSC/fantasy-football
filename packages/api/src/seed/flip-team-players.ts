import { FlipPosition, FlipGamePlayerCreateInput, FlipGamePlayer, prisma } from "@ffb/prisma";
import { getFlipGamePlayers } from "./scrapers/parse-depth-charts";
import { scrapeFantasyPros, initFantasyPros } from "./scrapers/scrape-fantasypros";

type validPositions = "WR"|"QB"|"TE"|"RB";
type validDepths = 0|1;

export interface PositionOption {
    position: validPositions,
    depth: validDepths,
    flipPosition: FlipPosition
}

type PositionOptionsMap = {[key in FlipPosition]: PositionOption};

const positionOptionsMap: PositionOptionsMap = {
    QB: {position: "QB", depth: 0, flipPosition: "QB"},
    RB: {position: "RB", depth: 0, flipPosition: "RB"},
    WR1: {position: "WR", depth: 0, flipPosition: "WR1"},
    WR2: {position: "WR", depth: 1, flipPosition: "WR2"},
    TE: {position: "TE", depth: 0, flipPosition: "TE"}
};

export async function loadFlipGamePlayers(week) {
    const puppeteerBrowser = await initFantasyPros();
    for (const positionOptionKey of Object.keys(positionOptionsMap)) {
        await seed(puppeteerBrowser, week, positionOptionsMap[positionOptionKey]);
    }
}

async function seed(puppeteerPage, week: number, positionOption: PositionOption) {
    if (await doFlipGamePlayersExist(positionOption.flipPosition, week)) {
        console.log(`${positionOption.flipPosition} already seeded`);
        return;
    };
    const fantasyProsFile = await scrapeFantasyPros(puppeteerPage, positionOption.position.toLowerCase());
    const flipGamePlayers = await getFlipGamePlayers(fantasyProsFile, week, positionOption);
    for (const flipGamePlayer of flipGamePlayers) {
        await prisma.createFlipGamePlayer(flipGamePlayer);
    }
    console.log(`${flipGamePlayers.length} ${positionOption.flipPosition} seeded`);
}

async function doFlipGamePlayersExist(position: FlipPosition, week: number): Promise<boolean> {
    return prisma.$exists.flipGamePlayer({game: {week}, position});
}
