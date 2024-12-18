import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import config from "./config/app";
import db from "./config/db";
import registerRoutes from "./router";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const port = config.port;

registerRoutes(app);
db.connect();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
