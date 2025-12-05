import { Module } from '@nestjs/common';
import { QuotesService } from 'documents_environment/quotes/quotes.service';
import { QuotesController } from 'documents_environment/quotes/quotes.controller';
import { quotesProviders } from 'documents_environment/quotes/providers/quotes.providers';

import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [QuotesController],
  providers: [...quotesProviders, QuotesService],
})
export class QuotesModule {}
