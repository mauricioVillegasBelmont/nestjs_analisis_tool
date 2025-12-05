import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';

import { IaServiceController } from 'ia_service/ia_service.controller';
import { IAService } from 'ia_service/ia_service.service';
import { IAFactory } from 'ia_service/factory/ia_factory';

const IA_SERVICE_NAME = 'IA_SERVICE_NAME';

@Module({
  imports: [DatabaseModule],
  controllers: [IaServiceController],
  providers: [
    {
      provide: IA_SERVICE_NAME,
      useValue: process.env.IA_PROVIDER ?? 'deepseek',
    },
    {
      provide: IAFactory,
      useFactory: (name: string) => new IAFactory(name),
      inject: [IA_SERVICE_NAME],
    },
    IAService,
  ],
  exports: [IAService, IAFactory],
})
export class IaServiceModule {}
