import { Response, Request, NextFunction } from "express";
import { CHART_OF_ACCOUNT_RESPONSE_MESSAGE } from "./response-message";
import fs from "fs";
import path from "path";
import { ChartOfAccount, ChartOfAccountsResponse } from "./response.interface";
import { CreateChartOfAccountsRequest, DeleteChartOfAccountsRequest } from "./request.interface";
import { addChartOfAccount, deleteChartOfAccount, readChartOfAccountFile } from "./service";

/**
 * Get Chart Of Accounts
 * @param req 
 * @param res 
 * @param next 
 */
export const getChartOfAccountsHandler = async (req: Request, res: Response<ChartOfAccountsResponse>, next: NextFunction) => {
    try { 
        const chartOfAccounts: ChartOfAccount[] = await readChartOfAccountFile();
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

/**
 * Create chart of accounts data
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const createChartOfAccountHandler = async (req: Request<{}, {}, CreateChartOfAccountsRequest, {}>, res: Response, next: NextFunction) => {
    const chartOfAccounts: ChartOfAccount[] = await readChartOfAccountFile();
    await fs.promises.writeFile(path.join(__dirname, "chart-of-account.json"), JSON.stringify(addChartOfAccount(req.body, chartOfAccounts)), "utf8");
    return res.json({
        error: false,
        code: 200,
        message: CHART_OF_ACCOUNT_RESPONSE_MESSAGE.CREATE_SUCCESS
    });
};

/**
 * Delete chart of accounts data
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const deleteChartOfAccountHandler = async (req: Request<{}, {}, DeleteChartOfAccountsRequest, {}>, res: Response, next: NextFunction) => {
    const chartOfAccounts: ChartOfAccount[] = await readChartOfAccountFile();
    await fs.promises.writeFile(path.join(__dirname, "chart-of-account.json"), JSON.stringify(deleteChartOfAccount(req.body, chartOfAccounts)), "utf8");
    return res.json({
        error: false,
        code: 200,
        message: CHART_OF_ACCOUNT_RESPONSE_MESSAGE.DELETE_SUCCESS
    });
};