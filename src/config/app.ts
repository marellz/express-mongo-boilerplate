import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env["PORT"] ?? "8000",
  app_name: process.env["APP_NAME"],
};

export default config;