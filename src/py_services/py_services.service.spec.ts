import { Test, TestingModule } from '@nestjs/testing';
import { PyServicesService } from 'py_services/py_services.service';

describe('PyServicesService', () => {
  let service: PyServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PyServicesService],
    }).compile();

    service = module.get<PyServicesService>(PyServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
