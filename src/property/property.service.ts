import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  async findAll() {}
  async findOne(id, sort) {}
  async create(body) {}
  async update(id, body) {}
  async partialUpdate(id, body) {}
  async remove(id) {}
}
