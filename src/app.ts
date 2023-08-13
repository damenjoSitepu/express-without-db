import express from "express";
import { EXPRESS_CONFIG } from "./configs/express.config";
import { apiRoute } from "./routes/api.route";
import cors from "cors";

const app = express();
// Allow Request From Any IP Address
app.use(cors());
app.use(express.urlencoded({
    extended: false,
    limit: 10000,
    parameterLimit: 2
}));
app.use(express.json());

apiRoute(app);

/** Init Routes */
app.listen(EXPRESS_CONFIG.PORT, () => {
    console.log("App are ready to be released");
});