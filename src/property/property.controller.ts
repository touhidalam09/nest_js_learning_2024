import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
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
import { HeaderDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';

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
  // @UsePipes(new ZodValidationPipe(CreatePropertySchema))
  create(
    @Body()
    body: CreatePropertyDto, // body: CreatePropertyDto,
  ) {
    return body;
  }

  @Put()
  update() {
    return 'This will update a property';
  }

  @Patch(':id')
  // @UsePipes(new ZodValidationPipe(CreatePropertySchema))
  partialUpdate(
    // @Param() Param: IdParamDto,
    @Param('id', ParseIdPipe) id,
    @Body()
    body: CreatePropertyDto,
    // @Headers() header: HeaderDto,
    @RequestHeader(
      new ValidationPipe({ whitelist: true, validateCustomDecorators: true }),
    )
    header: HeaderDto,
  ) {
    return header;
  }

  @Delete()
  remove() {
    return 'This will remove a property';
  }
}
