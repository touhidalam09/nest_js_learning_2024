import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, metadata: ArgumentMetadata) {
    // According to nest js documentation
    // try {
    //   const parseValue = this.schema.parse(value);
    //   return parseValue;
    //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // } catch (error) {
    //   throw new BadRequestException('Validation Failed!');
    // }

    //Custom
    const parsedValue = this.schema.safeParse(value);
    if (parsedValue.success) return parsedValue;

    throw new BadRequestException(parsedValue.error.format());
  }
}
