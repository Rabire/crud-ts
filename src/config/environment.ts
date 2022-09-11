import * as dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  host: process.env.DB_HOST || "localhost",
  productionHost: process.env.DB_HOST || "127.0.0.1",
  database: process.env.DB_DATABASE || "db-name",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
};

export default config;
