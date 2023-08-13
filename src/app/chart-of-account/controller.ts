import { Response, Request, NextFunction } from "express";
import { CHART_OF_ACCOUNT_RESPONSE_MESSAGE } from "./response-message";
import fs from "fs";
import path from "path";
import { ChartOfAccount, ChartOfAccountsResponse } from "./response.interface";

/**
 * Get Chart Of Accounts
 * @param req 
 * @param res 
 * @param next 
 */
export const getChartOfAccountsHandler = async (req: Request, res: Response<ChartOfAccountsResponse>, next: NextFunction) => {
    try { 
        const chartOfAccountsBuffer: string = await fs.promises.readFile(path.join(__dirname, "chart-of-account.json"), "utf8");
        const chartOfAccounts: ChartOfAccount[] = JSON.parse(chartOfAccountsBuffer);
        
        if (chartOfAccounts?.length === 0) {
            return res.json({
                error: true,
                code: 404,
                message: CHART_OF_ACCOUNT_RESPONSE_MESSAGE.EMPTY
            });
        }

        return res.json({
            error: false,
            code: 200,
            message: CHART_OF_ACCOUNT_RESPONSE_MESSAGE.GET_SUCCESS,
            data: { 
                chartOfAccounts: chartOfAccounts
            }
        });
    } catch (e) {
        return res.json({
            error: true,
            code: 500,
            message: e instanceof Error ? e.message : CHART_OF_ACCOUNT_RESPONSE_MESSAGE.SOMETHING_WENT_WRONG
        });
    }
}