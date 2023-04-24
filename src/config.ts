import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { UserEntity } from "./domain/user/user.entity";
import { BookEntity } from "./domain/book/book.entity";

const dbConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT), // yours still must be 5432
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [UserEntity, BookEntity],
  logging: false,
};

export default {
  db: dbConfig,
  port: 3000,
};
