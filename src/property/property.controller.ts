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
  // UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

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
  create(
    @Body(new ValidationPipe({ whitelist: true })) body: CreatePropertyDto,
  ) {
    return body;
  }

  @Put()
  update() {
    return 'This will update a property';
  }

  @Patch()
  partialUpdate() {
    return 'This will update a property partially';
  }

  @Delete()
  remove() {
    return 'This will remove a property';
  }
}
