import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';

import { DatabaseModule } from 'src/database/database.module';
import { quotesProviders } from './quotes.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [QuotesController],
  providers: [...quotesProviders,QuotesService],
})
export class QuotesModule {}
