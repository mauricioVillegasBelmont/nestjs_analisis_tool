import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ValidationPipe, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { FilterFromDocumentDto } from './dto/Select-document.dto';
import { SearchFromDocumentDto } from './dto/Search-document.dto';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get('/search')
  search(
    @Query(new ValidationPipe({ transform: true })) queryParams: SearchFromDocumentDto,
  ) {
    if (!queryParams.content) queryParams.content = false;
    const documents = this.documentsService.search(queryParams);
    return documents
  }

  @Post()
  create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentsService.create(createDocumentDto);
  }

  @Get()
  findAll(
    @Query(new ValidationPipe({ transform: true })) queryParams: FilterFromDocumentDto,
  ) {
    if (!queryParams.content) queryParams.content = false;
    return this.documentsService.findAll(queryParams);
  }
  

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number,@Query(new ValidationPipe({ transform: true })) queryParams: FilterFromDocumentDto) {
    return this.documentsService.findOneOrFail(+id,queryParams);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDocumentDto: UpdateDocumentDto) {
    return this.documentsService.update(+id, updateDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return false
    return this.documentsService.remove(+id);
  }

  
}
