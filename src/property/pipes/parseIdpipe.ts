import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable() // If I want this file use out side on this module;
export class ParseIdPipe implements PipeTransform<string, number> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);

    if (isNaN(val)) throw new BadRequestException('Invalid ID');
    if (val <= 0)
      throw new BadRequestException('ID should be a positive integer');
    return val;
  }
}
