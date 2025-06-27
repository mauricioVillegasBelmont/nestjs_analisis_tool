import { Module } from '@nestjs/common';
import { ExternalAssetsService } from './external_assets.service';
import { ExternalAssetsController } from './external_assets.controller';

import { DatabaseModule } from 'src/database/database.module';
import { external_assetsProviders } from './external_assets.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ExternalAssetsController],
  providers: [...external_assetsProviders,ExternalAssetsService],
})
export class ExternalAssetsModule {}
