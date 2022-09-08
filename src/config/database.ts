import { Sequelize } from "sequelize-typescript";
import { Todo } from "models/todo";
import config from "./environment";

const database = new Sequelize({
  dialect: "mariadb",
  host: config.host,
  database: config.database,
  username: config.username,
  password: config.password,
  logging: false,
  models: [Todo],
});

export default database;
