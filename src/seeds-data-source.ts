import * as dotenv from 'dotenv';
dotenv.config();

import { DataSource } from 'typeorm';
import config from './config';

export const migrationsDataSource = new DataSource({
  ...config.db,
  migrations: ['src/seeds/*.ts'],
  migrationsTableName: 'seeds',
});
