import { Module } from '@nestjs/common';
import { LabelsService } from 'documents_environment/labels/labels.service';
import { LabelsController } from 'documents_environment/labels/labels.controller';
import { labelsProviders } from 'documents_environment/labels/providers/labels.providers';

import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LabelsController],
  providers: [...labelsProviders, LabelsService],
})
export class LabelsModule {}
