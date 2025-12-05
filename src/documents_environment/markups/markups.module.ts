import { Module } from '@nestjs/common';
import { MarkupsService } from 'documents_environment/markups/markups.service';
import { MarkupsController } from 'documents_environment/markups/markups.controller';

import { DatabaseModule } from 'database/database.module';
import { markupsProviders } from 'documents_environment/markups/providers/markups.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MarkupsController],
  providers: [...markupsProviders, MarkupsService],
})
export class MarkupsModule {}
