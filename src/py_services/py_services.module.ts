import { Module } from '@nestjs/common';
import { PyServicesService } from 'py_services/py_services.service';
import { PyServicesController } from 'py_services/py_services.controller';

@Module({
  providers: [PyServicesService],
  controllers: [PyServicesController],
})
export class PyServicesModule {}
