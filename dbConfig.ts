import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://realEstate_owner:Xi03qhRjyZuE@ep-misty-tree-a8ng01l1.eastus2.azure.neon.tech/realEstate?sslmode=require',
  type: 'postgres',
  port: 3306,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // ! Production make false
};
