import express, {
    Express, Request, Response, NextFunction
} from "express";
import { ROUTE_URL } from "../urls/route.url";
import { MAIN_MESSAGE } from "../messages/main.message";
import chartOfAccountRoute from "./Apis/chart-of-account.route";
import { EXPRESS_CONFIG } from "../configs/express.config";

/**
 * Main Routes Here
 */
export const apiRoute = (app: Express) => {
    app.get(ROUTE_URL.ROOT, (req: Request, res: Response, next: NextFunction) => {
        return res.json({
            error: false,
            code: 200,
            message: MAIN_MESSAGE.GET_SUCCESS
        })
    });

    app.use(`${EXPRESS_CONFIG.URL_PREFIX}/chart-of-account`, chartOfAccountRoute);
};