import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
// import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import {
  CreatePropertySchema,
  CreatePropertyZodDto,
} from './dto/createPropertyZod.dto';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All Properties';
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    console.log(typeof id);
    console.log(typeof sort);
    return `Property with ID: ${id}`;
  }

  @Post()
  // @UsePipes(new ValidationPipe({ whitelist: true })) //{ whitelist: true, forbidNonWhitelisted: true }
  @UsePipes(new ZodValidationPipe(CreatePropertySchema))
  create(
    @Body()
    body: CreatePropertyZodDto, // body: CreatePropertyDto,
  ) {
    return body;
  }

  @Put()
  update() {
    return 'This will update a property';
  }

  @Patch(':id')
  partialUpdate(
    // @Param() Param: IdParamDto,
    @Param('id', ParseIdPipe) id,
    @Body()
    body: CreatePropertyDto,
  ) {
    return body;
  }

  @Delete()
  remove() {
    return 'This will remove a property';
  }
}
