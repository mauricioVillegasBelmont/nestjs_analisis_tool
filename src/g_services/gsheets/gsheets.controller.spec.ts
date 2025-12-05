import { Test, TestingModule } from '@nestjs/testing';
import { GsheetsController } from 'g_services/gsheets/gsheets.controller';

describe('GsheetsController', () => {
  let controller: GsheetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GsheetsController],
    }).compile();

    controller = module.get<GsheetsController>(GsheetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
