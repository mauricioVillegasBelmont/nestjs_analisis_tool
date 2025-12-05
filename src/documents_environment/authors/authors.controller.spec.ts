import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsController } from 'documents_environment/authors/authors.controller';
import { AuthorsService } from 'documents_environment/authors/authors.service';

describe('AuthorsController', () => {
  let controller: AuthorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorsController],
      providers: [AuthorsService],
    }).compile();

    controller = module.get<AuthorsController>(AuthorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
