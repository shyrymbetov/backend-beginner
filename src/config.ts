import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { UserEntity } from "./domain/user/user.entity";

const dbConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "library_app",
  password: "library_app",
  database: "library",
  synchronize: true,
  entities: [UserEntity],
};

export default {
  db: dbConfig,
};
