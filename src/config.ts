import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { UserEntity } from "./domain/user/user.entity";

const dbConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5434, // yours still must be 5432
  username: "library_app",
  password: "library_app",
  database: "library",
  synchronize: true,
  entities: [UserEntity],
  logging: false,
};

export default {
  db: dbConfig,
  port: 3000,
};
