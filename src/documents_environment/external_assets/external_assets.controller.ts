import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExternalAssetsService } from './external_assets.service';
import { CreateExternalAssetDto } from './dto/create-external_asset.dto';
import { UpdateExternalAssetDto } from './dto/update-external_asset.dto';

@Controller('external-assets')
export class ExternalAssetsController {
  constructor(private readonly externalAssetsService: ExternalAssetsService) {}

  @Post()
  create(@Body() createExternalAssetDto: CreateExternalAssetDto) {
    return this.externalAssetsService.create(createExternalAssetDto);
  }

  @Get()
  findAll() {
    return this.externalAssetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.externalAssetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExternalAssetDto: UpdateExternalAssetDto) {
    return this.externalAssetsService.update(+id, updateExternalAssetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.externalAssetsService.remove(+id);
  }
}
