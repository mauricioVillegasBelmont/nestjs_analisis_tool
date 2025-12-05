import { Test, TestingModule } from '@nestjs/testing';
import { DbpediaController } from 'dbpedia/dbpedia.controller';

describe('DbpediaController', () => {
  let controller: DbpediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbpediaController],
    }).compile();

    controller = module.get<DbpediaController>(DbpediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
