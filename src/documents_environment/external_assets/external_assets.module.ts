import { Module } from '@nestjs/common';
import { ExternalAssetsService } from 'documents_environment/external_assets/external_assets.service';
import { ExternalAssetsController } from 'documents_environment/external_assets/external_assets.controller';
import { external_assetsProviders } from 'documents_environment/external_assets/providers/external_assets.providers';

import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ExternalAssetsController],
  providers: [...external_assetsProviders, ExternalAssetsService],
})
export class ExternalAssetsModule {}
