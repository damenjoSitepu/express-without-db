import express from "express";
import { EXPRESS_CONFIG } from "./configs/express.config";
import { apiRoute } from "./routes/api.route";

const app = express();

apiRoute(app);

/** Init Routes */
app.listen(EXPRESS_CONFIG.PORT, () => {
    console.log("App are ready to be released");
});