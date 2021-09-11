import { Module } from '@nestjs/common';
import { BolsaFamiliaService } from './bolsa-familia.service';
import { BolsaFamiliaController } from './bolsa-familia.controller';

@Module({
  controllers: [BolsaFamiliaController],
  providers: [BolsaFamiliaService],
})
export class BolsaFamiliaModule {}
