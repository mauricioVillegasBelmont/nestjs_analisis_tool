import { Injectable } from '@nestjs/common';
import { CreateExternalAssetDto } from 'documents_environment/external_assets/dto/create-external_asset.dto';
import { UpdateExternalAssetDto } from 'documents_environment/external_assets/dto/update-external_asset.dto';

@Injectable()
export class ExternalAssetsService {
  create(createExternalAssetDto: CreateExternalAssetDto) {
    return 'This action adds a new externalAsset';
  }

  findAll() {
    return `This action returns all externalAssets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} externalAsset`;
  }

  update(id: number, updateExternalAssetDto: UpdateExternalAssetDto) {
    return `This action updates a #${id} externalAsset`;
  }

  remove(id: number) {
    return `This action removes a #${id} externalAsset`;
  }
}
