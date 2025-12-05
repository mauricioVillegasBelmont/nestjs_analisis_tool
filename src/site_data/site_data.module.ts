import { Module } from '@nestjs/common';
import { SiteDataService } from 'site_data/site_data.service';
import { SiteDataController } from 'site_data/site_data.controller';

import { DatabaseModule } from 'database/database.module';
import { site_dataProviders } from 'site_data/site_data.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SiteDataController],
  providers: [...site_dataProviders, SiteDataService],
})
export class SiteDataModule {}
