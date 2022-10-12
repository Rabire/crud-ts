import dotenv from "dotenv";

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mariadb",
  },
  production: {
    username: process.env.DB_USER,
    password: null,
    database: process.env.DB_DATABASE,
    host: process.env.DB_PRODUCTION_HOST,
    dialect: "mariadb",
  },
};
