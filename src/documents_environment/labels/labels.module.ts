import { Module } from '@nestjs/common';
import { LabelsService } from './labels.service';
import { LabelsController } from './labels.controller';

import { DatabaseModule } from 'src/database/database.module';
import { label_referencesProviders, labelsProviders } from './labels.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [LabelsController],
  providers: [...labelsProviders, ...label_referencesProviders, LabelsService],
})
export class LabelsModule {}
