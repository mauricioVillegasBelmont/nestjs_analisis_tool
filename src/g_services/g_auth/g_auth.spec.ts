import { Test, TestingModule } from '@nestjs/testing';
import { GAuth } from 'g_auth';

describe('GAuth', () => {
  let provider: GAuth;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GAuth],
    }).compile();

    provider = module.get<GAuth>(GAuth);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
