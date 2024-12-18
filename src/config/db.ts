import dotenv from "dotenv";
import mongoose, { MongooseOptions } from "mongoose";

dotenv.config();

const config: {
  db_uri?: string;
  db_options: MongooseOptions;
} = {
  db_uri: process.env["MONGO_URL"],
  db_options: {},
};

const connect = async () => {
  if (!config.db_uri) throw "DB Uri is invalid";

  try {
    await mongoose.connect(config.db_uri, config.db_options);
    console.log("MongoDB connected!");
  } catch (error) {
    console.error({ message: "MongoDB did not connect.", error });
  }
};

export default { config, connect };
