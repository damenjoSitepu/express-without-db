import express from "express";
import { CHART_OF_ACCOUNT_ROUTE_URL } from "../../app/chart-of-account/route-url";
import { getChartOfAccountHandler } from "../../app/chart-of-account/controller";

const router = express.Router();

router.get(CHART_OF_ACCOUNT_ROUTE_URL.GET, getChartOfAccountHandler);

export default router;