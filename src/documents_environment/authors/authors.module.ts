import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';

import { DatabaseModule } from 'src/database/database.module';
import { authorsProviders } from './authors.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [AuthorsController],
  providers: [...authorsProviders,AuthorsService],
})
export class AuthorsModule {}
