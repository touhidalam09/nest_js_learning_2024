import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'realEstate',
  // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // ! Production make false
};
