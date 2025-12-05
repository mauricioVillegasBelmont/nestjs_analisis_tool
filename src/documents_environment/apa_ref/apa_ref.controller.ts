import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApaRefService } from 'documents_environment/apa_ref/apa_ref.service';
import { CreateApaRefDto } from 'documents_environment/apa_ref/dto/create-apa_ref.dto';
import { UpdateApaRefDto } from 'documents_environment/apa_ref/dto/update-apa_ref.dto';

@Controller('apa-ref')
export class ApaRefController {
  constructor(private readonly apaRefService: ApaRefService) {}

  @Post()
  create(@Body() createApaRefDto: CreateApaRefDto) {
    return this.apaRefService.create(createApaRefDto);
  }

  @Get()
  findAll() {
    return this.apaRefService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apaRefService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApaRefDto: UpdateApaRefDto) {
    return this.apaRefService.update(+id, updateApaRefDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apaRefService.remove(+id);
  }
}
