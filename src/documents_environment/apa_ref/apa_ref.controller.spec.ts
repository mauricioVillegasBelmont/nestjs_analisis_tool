import { Test, TestingModule } from '@nestjs/testing';
import { ApaRefController } from 'documents_environment/apa_ref/apa_ref.controller';
import { ApaRefService } from 'documents_environment/apa_ref/apa_ref.service';

describe('ApaRefController', () => {
  let controller: ApaRefController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApaRefController],
      providers: [ApaRefService],
    }).compile();

    controller = module.get<ApaRefController>(ApaRefController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
