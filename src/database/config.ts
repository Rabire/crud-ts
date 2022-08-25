import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos";

const database = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "pass123",
  database: "app-db-name",
  logging: false,
  models: [Todos],
});

export default database;
