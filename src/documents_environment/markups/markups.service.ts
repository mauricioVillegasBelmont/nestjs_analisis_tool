import { Injectable } from '@nestjs/common';
import { CreateMarkupDto } from './dto/create-markup.dto';
import { UpdateMarkupDto } from './dto/update-markup.dto';

@Injectable()
export class MarkupsService {
  create(createMarkupDto: CreateMarkupDto) {
    return 'This action adds a new markup';
  }

  findAll() {
    return `This action returns all markups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} markup`;
  }

  update(id: number, updateMarkupDto: UpdateMarkupDto) {
    return `This action updates a #${id} markup`;
  }

  remove(id: number) {
    return `This action removes a #${id} markup`;
  }
}
