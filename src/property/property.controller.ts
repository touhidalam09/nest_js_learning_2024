import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All Properties';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Property with ID: ${id}`;
  }

  @Post()
  create(@Body() body) {
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
