import { Module } from '@nestjs/common';
import { AuthorsService } from 'documents_environment/authors/authors.service';
import { AuthorsController } from 'documents_environment/authors/authors.controller';

import { DatabaseModule } from 'database/database.module';
import { authorsProviders } from 'documents_environment/authors/providers/authors.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorsController],
  providers: [...authorsProviders, AuthorsService],
})
export class AuthorsModule {}
