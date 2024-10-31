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
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
// import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
// import { ZodValidationPipe } from './pipes/zodValidationPipe';
// import {
//   CreatePropertySchema,
//   CreatePropertyZodDto,
// } from './dto/createPropertyZod.dto';
import { HeaderDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    return this.propertyService.findOne(id, sort);
  }

  @Post()
  // @UsePipes(new ValidationPipe({ whitelist: true })) //{ whitelist: true, forbidNonWhitelisted: true }
  // @UsePipes(new ZodValidationPipe(CreatePropertySchema))
  create(
    @Body()
    body: CreatePropertyDto, // body: CreatePropertyDto,
  ) {
    return this.propertyService.create(body);
  }

  @Put()
  update() {
    return this.propertyService.update(1, 'Update');
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
    return this.propertyService.partialUpdate(id, header);
  }

  @Delete()
  remove() {
    return this.propertyService.remove(1);
  }
}
