import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
// import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.propertyService.findOne(id);
  }

  @Post()
  create(
    @Body()
    dto: CreatePropertyDto, // body: CreatePropertyDto,
  ) {
    return this.propertyService.create(dto);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id,
    @Body()
    body: UpdatePropertyDto,
  ) {
    return this.propertyService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIdPipe) id) {
    return this.propertyService.remove(id);
  }
}
