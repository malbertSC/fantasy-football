import * as puppeteer from "puppeteer";
import { download } from "./puppeteer-download";

export async function scrapeFantasyPros(browser: puppeteer.Browser, positionResource: string): Promise<string> {
    const page = await browser.newPage();
    await page.goto(`https://www.fantasypros.com/nfl/projections/${positionResource}.php`);
    await page.waitForSelector(".export")
    const file = await download(page, ".export");
    return file;
}

export async function initFantasyPros(): Promise<puppeteer.Browser> {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(`https://www.fantasypros.com/nfl/projections/qb.php`);
    await page.click(".export");
    await page.waitForSelector("#id_username");
    await page.type("#id_username", "frogstomp19"); // process.env.FANTASYPROS_USERNAME);
    await page.type("#id_password", "F4PPAnpQi7z5BLL"); // process.env.FANTASYPROS_PASSWORD);
    await page.click(".btn-primary");
    await page.waitForSelector(".export")
    return browser;
}
