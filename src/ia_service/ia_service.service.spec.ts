import { Test, TestingModule } from '@nestjs/testing';
import { IAService } from 'ia_service/ia_service.service';

describe('IAService', () => {
  let service: IAService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IAService],
    }).compile();

    service = module.get<IAService>(IAService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
