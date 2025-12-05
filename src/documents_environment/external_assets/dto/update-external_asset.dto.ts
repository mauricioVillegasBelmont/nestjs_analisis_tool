import { PartialType } from '@nestjs/swagger';
import { CreateExternalAssetDto } from 'documents_environment/external_assets/dto/create-external_asset.dto';

export class UpdateExternalAssetDto extends PartialType(
  CreateExternalAssetDto,
) {}
