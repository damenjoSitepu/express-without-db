import express from "express";
import { EXPRESS_CONFIG } from "./configs/express.config";

const app = express();

/** Init Routes */
app.listen(EXPRESS_CONFIG.PORT, () => {
    console.log("App are ready to be released");
});