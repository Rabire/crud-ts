import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos";
import config from "./environment";

const database = new Sequelize({
  dialect: "mariadb",
  host: config.host,
  database: config.database,
  username: config.username,
  password: config.password,
  logging: false,
  models: [Todos],
});

export default database;
