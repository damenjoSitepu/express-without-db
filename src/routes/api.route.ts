import express, {
    Express, Request, Response, NextFunction
} from "express";
import { ROUTE_URL } from "../urls/route.url";
import { MAIN_MESSAGE } from "../messages/main.message";

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
};