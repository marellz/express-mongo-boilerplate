import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

import appConfig from "./config/app";
dotenv.config();

const app: Express = express();
const port = appConfig.port;

app.get("/", (_, res) => {
  res.send("Welcome Dave!");
});

app.get("/home", (_, res) => {
  res.send("This is NOT home!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
