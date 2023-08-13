import fs from "fs";
import path from "path";
import { ChartOfAccount } from "./response.interface";

export async function readChartOfAccountFile(): Promise<ChartOfAccount[]> {
    try {
        const readFileBuffer = await fs.promises.readFile(path.join(__dirname, "chart-of-account.json"), "utf8");
        return JSON.parse(readFileBuffer);
    } catch (e) {
        return [];
    }
};