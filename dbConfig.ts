import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://nestJS_owner:C5syqPJXTrM0@ep-misty-term-a88582sh.eastus2.azure.neon.tech/nestJS?sslmode=require',
  type: 'postgres',
  port: 3306,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // ! Production make false
};
