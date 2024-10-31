import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
// import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [PropertyController],
  // If Use Vod validations are enabled then comment global validation settings
  // providers: [
  //   {
  //     provide: APP_PIPE,
  //     useValue: new ValidationPipe({
  //       whitelist: true,
  //       forbidNonWhitelisted: true,
  //       transform: true,
  //       transformOptions: {
  //         enableImplicitConversion: true,
  //       },
  //     }),
  //   },
  // ],
})
export class PropertyModule {}
