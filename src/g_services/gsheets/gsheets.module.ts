import { Module } from '@nestjs/common';
import { GsheetsController } from 'g_services/gsheets/gsheets.controller';
import { GsheetsService } from 'g_services/gsheets/gsheets.service';

import { GAuthModule } from 'g_services/g_auth/g_auth.module';

@Module({
  imports: [GAuthModule],
  providers: [GsheetsService],
  controllers: [GsheetsController],
})
export class GsheetsModule {}
