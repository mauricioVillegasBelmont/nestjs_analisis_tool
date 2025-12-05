import { Test, TestingModule } from '@nestjs/testing';
import { ApaRefService } from 'apa_ref.service';

describe('ApaRefService', () => {
  let service: ApaRefService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApaRefService],
    }).compile();

    service = module.get<ApaRefService>(ApaRefService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
