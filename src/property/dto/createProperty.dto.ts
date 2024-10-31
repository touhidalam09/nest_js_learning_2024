import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @Length(2, 10, {
    message: 'Property name validation failed on length',
  })
  name: string;

  @IsString()
  description: string;

  @IsInt()
  @IsPositive()
  area: number;
}
