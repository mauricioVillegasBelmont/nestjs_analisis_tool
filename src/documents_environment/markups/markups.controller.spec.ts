import { Test, TestingModule } from '@nestjs/testing';
import { MarkupsController } from 'documents_environment/markups/markups.controller';
import { MarkupsService } from 'documents_environment/markups/markups.service';

describe('MarkupsController', () => {
  let controller: MarkupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarkupsController],
      providers: [MarkupsService],
    }).compile();

    controller = module.get<MarkupsController>(MarkupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
