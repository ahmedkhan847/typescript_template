import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";

export default class SequelizeConnection {
  public connection: Sequelize;
  init() {
    this.connection = new Sequelize({
      database: "jobportal",
      dialect: "mysql",
      username: "root",
      password: "123456",
      port: 3307,
      models: [User],
    });
  }
}
