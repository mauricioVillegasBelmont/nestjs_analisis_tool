import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MarkupsService } from 'documents_environment/markups/markups.service';
import { CreateMarkupDto } from 'documents_environment/markups/dto/create-markup.dto';
import { UpdateMarkupDto } from 'documents_environment/markups/dto/update-markup.dto';

@Controller('markups')
export class MarkupsController {
  constructor(private readonly markupsService: MarkupsService) {}

  @Post()
  create(@Body() createMarkupDto: CreateMarkupDto) {
    return this.markupsService.create(createMarkupDto);
  }

  @Get()
  findAll() {
    return this.markupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.markupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarkupDto: UpdateMarkupDto) {
    return this.markupsService.update(+id, updateMarkupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.markupsService.remove(+id);
  }
}
