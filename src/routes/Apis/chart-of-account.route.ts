import express from "express";
import { CHART_OF_ACCOUNT_ROUTE_URL } from "../../app/chart-of-account/route-url";
import { createChartOfAccountHandler, deleteChartOfAccountHandler, getChartOfAccountsHandler } from "../../app/chart-of-account/controller";

const router = express.Router();

router.get(CHART_OF_ACCOUNT_ROUTE_URL.GET, getChartOfAccountsHandler);
router.post(CHART_OF_ACCOUNT_ROUTE_URL.CREATE, createChartOfAccountHandler);
router.delete(CHART_OF_ACCOUNT_ROUTE_URL.DELETE, deleteChartOfAccountHandler);

export default router;