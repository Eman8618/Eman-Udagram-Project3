import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.POSTGRES_HOST,
  port: config.dbport,

  dialect: "postgres",
  storage: ":memory:",
});
