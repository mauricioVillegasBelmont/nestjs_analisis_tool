import { Test, TestingModule } from '@nestjs/testing';
import { PyServicesController } from 'py_services/py_services.controller';

describe('PyServicesController', () => {
  let controller: PyServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PyServicesController],
    }).compile();

    controller = module.get<PyServicesController>(PyServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
