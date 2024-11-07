import { CreatePropertyDto } from './createProperty.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {}
