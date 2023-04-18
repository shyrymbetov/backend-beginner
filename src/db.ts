import { DataSource } from "typeorm";
import config from "./config";

export default class DB {
  private static instance: DB;
  public dataSource: DataSource;

  private constructor() {
    this.dataSource = new DataSource(config.db);
    this.dataSource
      .initialize()
      .then(() => console.log("successfully connected to DB"))
      .catch((error) => {
        console.error("failed to connect to DB");
        console.error(error);
      });
  }

  public static getInstance(): DB {
    if (!DB.instance) {
      DB.instance = new DB();
    }
    return DB.instance;
  }
}
