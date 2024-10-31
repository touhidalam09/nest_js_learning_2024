import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @Length(2, 10, {
    groups: ['create'],
    message: 'Property name validation failed on length',
  })
  name: string;

  @IsString()
  @Length(2, 10, { groups: ['create'] })
  @Length(1, 10, { groups: ['update'] })
  description: string;

  @IsInt()
  @IsPositive()
  area: number;
}
