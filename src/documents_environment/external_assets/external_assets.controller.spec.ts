import { Test, TestingModule } from '@nestjs/testing';
import { ExternalAssetsController } from 'documents_environment/external_assets/external_assets.controller';
import { ExternalAssetsService } from 'documents_environment/external_assets/external_assets.service';

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
