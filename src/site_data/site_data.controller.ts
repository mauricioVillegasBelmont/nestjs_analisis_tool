import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SiteDataService } from 'site_data/site_data.service';
import { CreateSiteDatumDto } from 'site_data/dto/create-site_datum.dto';
import { UpdateSiteDatumDto } from 'site_data/dto/update-site_datum.dto';

@Controller('site-data')
export class SiteDataController {
  constructor(private readonly siteDataService: SiteDataService) {}

  @Post()
  create(@Body() createSiteDatumDto: CreateSiteDatumDto) {
    return this.siteDataService.create(createSiteDatumDto);
  }

  @Get()
  findAll() {
    return this.siteDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.siteDataService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSiteDatumDto: UpdateSiteDatumDto,
  ) {
    return this.siteDataService.update(+id, updateSiteDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.siteDataService.remove(+id);
  }
}
