import { Test, TestingModule } from '@nestjs/testing';
import { BolsaFamiliaController } from './bolsa-familia.controller';
import { BolsaFamiliaService } from './bolsa-familia.service';

describe('BolsaFamiliaController', () => {
  let controller: BolsaFamiliaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BolsaFamiliaController],
      providers: [BolsaFamiliaService],
    }).compile();

    controller = module.get<BolsaFamiliaController>(BolsaFamiliaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
