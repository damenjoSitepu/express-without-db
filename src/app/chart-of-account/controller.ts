import { Response, Request, NextFunction } from "express";
import { CHART_OF_ACCOUNT_RESPONSE_MESSAGE } from "./response-message";
import fs from "fs";
import path from "path";

export const getChartOfAccountHandler = async (req: Request, res: Response, next: NextFunction) => {
    try { 
        let chartOfAccounts = await fs.promises.readFile(path.join(__dirname, "chart-of-account.json"), "utf8");
        chartOfAccounts = JSON.parse(chartOfAccounts);
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
            data: { chartOfAccounts }
        });
    } catch (e) {
        return res.json({
            error: true,
            code: 500,
            message: ((e instanceof Error) && e.message) ?? CHART_OF_ACCOUNT_RESPONSE_MESSAGE.SOMETHING_WENT_WRONG,
        });
    }
}