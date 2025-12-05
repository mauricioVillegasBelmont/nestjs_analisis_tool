import { Test, TestingModule } from '@nestjs/testing';
import { SiteDataController } from 'site_data/site_data.controller';
import { SiteDataService } from 'site_data/site_data.service';

describe('SiteDataController', () => {
  let controller: SiteDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteDataController],
      providers: [SiteDataService],
    }).compile();

    controller = module.get<SiteDataController>(SiteDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
