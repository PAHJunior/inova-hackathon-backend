import { Test, TestingModule } from '@nestjs/testing';
import { BolsaFamiliaService } from './bolsa-familia.service';

describe('BolsaFamiliaService', () => {
  let service: BolsaFamiliaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BolsaFamiliaService],
    }).compile();

    service = module.get<BolsaFamiliaService>(BolsaFamiliaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
