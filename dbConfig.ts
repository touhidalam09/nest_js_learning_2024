import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://learning%20nest%20js%202024_owner:eO0YFhnot7Wz@ep-patient-breeze-a1uwf2qj.ap-southeast-1.aws.neon.tech/learning%20nest%20js%202024?sslmode=require',
  type: 'postgres',
  //   host: 'your_host',
  port: 3306,
  //   username: 'your_username',
  //   password: 'your_password',
  //   database: 'nest',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // ! Production make false
};
