import { Module } from '@nestjs/common';
import { DbpediaController } from 'dbpedia/dbpedia.controller';
import { DbpediaService } from 'dbpedia/dbpedia.service';

@Module({
  controllers: [DbpediaController],
  providers: [DbpediaService],
})
export class DbpediaModule {}
