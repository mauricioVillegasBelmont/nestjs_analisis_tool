import { Test, TestingModule } from '@nestjs/testing';
import { ExternalAssetsService } from './external_assets.service';

describe('ExternalAssetsService', () => {
  let service: ExternalAssetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalAssetsService],
    }).compile();

    service = module.get<ExternalAssetsService>(ExternalAssetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
