import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { documentsProviders } from './documents.providers';

import { DatabaseModule } from 'src/database/database.module';


@Module({
  imports: [DatabaseModule],
  controllers: [DocumentsController],
  providers: [...documentsProviders,DocumentsService],
})
export class DocumentsModule {}
