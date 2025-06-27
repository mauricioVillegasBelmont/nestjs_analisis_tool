import { Module } from '@nestjs/common';
import { MarkupsService } from './markups.service';
import { MarkupsController } from './markups.controller';

import { DatabaseModule } from 'src/database/database.module';
import { markupsProviders } from './markups.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MarkupsController],
  providers: [...markupsProviders, MarkupsService],
})
export class MarkupsModule {}
