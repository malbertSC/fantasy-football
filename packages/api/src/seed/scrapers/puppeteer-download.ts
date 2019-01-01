import * as fs from "fs";
import { mkdirp } from "fs-extra";
import * as uuid from "uuid";
import * as path from "path";
import * as puppeteer from "puppeteer";

export async function download(page: puppeteer.Page, selector) {
    const downloadPath = path.resolve(__dirname, "download", uuid())
    mkdirp(downloadPath)
    console.log("Downloading file to:", downloadPath)
    await (page as any)._client.send("Page.setDownloadBehavior", { behavior: "allow", downloadPath })
    await page.click(selector)
    await page.screenshot({path: "example.png"});
    const filename = await waitForFileToDownload(downloadPath)
    return path.resolve(downloadPath, filename)
}

async function waitForFileToDownload(downloadPath) {
    console.log("Waiting to download file...")
    let filename
    console.log(downloadPath);
    while (!filename || filename.endsWith(".crdownload")) {
        filename = fs.readdirSync(downloadPath)[0];
        await sleep(500);
    }
    return filename
}

async function sleep(timeInMS: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeInMS);
    })
}
