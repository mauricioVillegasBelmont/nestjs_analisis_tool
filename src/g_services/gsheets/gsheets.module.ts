import { Module } from '@nestjs/common';
import { GsheetsController } from './gsheets.controller';
import { GsheetsService } from './gsheets.service';


import { GAuthModule } from 'src/g_services/g_auth/g_auth.module';

@Module({
  imports:[
    GAuthModule,
  ],
  providers:[
    GsheetsService,
  ],
  controllers:[GsheetsController],
})
export class GsheetsModule {}
