import fs from "fs";
import path from "path";
import { ChartOfAccount } from "./response.interface";
import { CreateChartOfAccountsRequest, DeleteChartOfAccountsRequest } from "./request.interface";

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
    const id: number = data?.length > 0 ? data[data.length - 1].id + 1 : 1; 
    return [
        ...data,
        {
            id,
            name: req.name,
            isActive: true
        }
    ];
}

/**
 * Delete chart of account
 * @param req 
 * @param data 
 */
export function deleteChartOfAccount(req: DeleteChartOfAccountsRequest, data: ChartOfAccount[]): ChartOfAccount[] {
    return data?.length === 0 ? [] : data.filter((coa: ChartOfAccount) => coa.id != req.id);
}