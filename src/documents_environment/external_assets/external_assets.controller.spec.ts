import { Test, TestingModule } from '@nestjs/testing';
import { ExternalAssetsController } from './external_assets.controller';
import { ExternalAssetsService } from './external_assets.service';

describe('ExternalAssetsController', () => {
  let controller: ExternalAssetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExternalAssetsController],
      providers: [ExternalAssetsService],
    }).compile();

    controller = module.get<ExternalAssetsController>(ExternalAssetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
