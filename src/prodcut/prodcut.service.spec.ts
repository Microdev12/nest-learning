import { Test, TestingModule } from '@nestjs/testing';
import { ProdcutService } from './prodcut.service';

describe('ProdcutService', () => {
  let service: ProdcutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdcutService],
    }).compile();

    service = module.get<ProdcutService>(ProdcutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
