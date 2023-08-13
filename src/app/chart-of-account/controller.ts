import { Response, Request, NextFunction } from "express";
import { CHART_OF_ACCOUNT_RESPONSE_MESSAGE } from "./response-message";

export const getChartOfAccountHandler = (req: Request, res: Response, next: NextFunction) => {
    return res.json({
        error: false,
        code: 200,
        message: CHART_OF_ACCOUNT_RESPONSE_MESSAGE.GET_SUCCESS
    });
}