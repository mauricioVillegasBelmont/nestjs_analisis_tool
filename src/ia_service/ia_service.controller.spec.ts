import { Test, TestingModule } from '@nestjs/testing';
import { IaServiceController } from 'ia_service/ia_service.controller';

describe('IaServiceController', () => {
  let controller: IaServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IaServiceController],
    }).compile();

    controller = module.get<IaServiceController>(IaServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
