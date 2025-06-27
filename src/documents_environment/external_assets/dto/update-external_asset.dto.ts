import { PartialType } from '@nestjs/swagger';
import { CreateExternalAssetDto } from './create-external_asset.dto';

export class UpdateExternalAssetDto extends PartialType(CreateExternalAssetDto) {}
