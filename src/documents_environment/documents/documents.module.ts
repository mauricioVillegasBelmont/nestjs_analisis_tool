import { Module } from '@nestjs/common';
import { DocumentsService } from 'documents_environment/documents/documents.service';
import { DocumentsController } from 'documents_environment/documents/documents.controller';
import { documentsProviders } from 'documents_environment/documents/providers/documents.providers';

import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DocumentsController],
  providers: [...documentsProviders, DocumentsService],
})
export class DocumentsModule {}
