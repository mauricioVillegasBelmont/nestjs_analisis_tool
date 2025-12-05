import { Test, TestingModule } from '@nestjs/testing';
import { QuotesController } from 'documents_environment/quotes/quotes.controller';
import { QuotesService } from 'documents_environment/quotes/quotes.service';

describe('QuotesController', () => {
  let controller: QuotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuotesController],
      providers: [QuotesService],
    }).compile();

    controller = module.get<QuotesController>(QuotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
