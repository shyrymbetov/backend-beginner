import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { UserEntity } from "./domain/user/user.entity";
import { BookEntity } from "./domain/book/book.entity";
import { AuthorEntity} from "./domain/author/author.entity";
import * as dotenv from 'dotenv';

let migrations: string[] = [];

if (process.env.NODE_ENV === 'migration') {
  dotenv.config();
  migrations = ['src/migrations/*.ts'];
}

if (process.env.NODE_ENV === 'seed') {
  dotenv.config();
  migrations = ['src/seeds/*.ts'];
}

const dbConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT), // yours still must be 5432
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [UserEntity, BookEntity, AuthorEntity],
  logging: false,
  migrations,
};

export default {
  db: dbConfig,
  port: 3001,
};
