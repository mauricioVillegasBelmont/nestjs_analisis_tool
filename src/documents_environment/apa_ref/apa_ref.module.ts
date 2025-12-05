import { Module } from '@nestjs/common';
import { ApaRefService } from 'documents_environment/apa_ref/apa_ref.service';
import { ApaRefController } from 'documents_environment/apa_ref/apa_ref.controller';

@Module({
  controllers: [ApaRefController],
  providers: [ApaRefService],
})
export class ApaRefModule {}
