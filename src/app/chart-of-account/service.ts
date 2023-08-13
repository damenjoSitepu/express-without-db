import fs from "fs";
import path from "path";
import { ChartOfAccount } from "./response.interface";
import { CreateChartOfAccountsRequest } from "./request.interface";

/**
 * Read Chart of account file
 */
export async function readChartOfAccountFile(): Promise<ChartOfAccount[]> {
    try {
        const readFileBuffer = await fs.promises.readFile(path.join(__dirname, "chart-of-account.json"), "utf8");
        return JSON.parse(readFileBuffer);
    } catch (e) {
        return [];
    }
};

/**
 * Add chart of account
 * @param req 
 * @param data 
 */
export function addChartOfAccount(req: CreateChartOfAccountsRequest, data: ChartOfAccount[]): ChartOfAccount[] {
    data.push({
        id: data.length + 1,
        name: req.name,
        isActive: true
    });
    return data;
}