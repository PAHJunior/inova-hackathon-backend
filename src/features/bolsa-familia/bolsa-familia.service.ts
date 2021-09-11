import { Injectable } from '@nestjs/common';
import { CreateBolsaFamiliaDto } from './dto/create-bolsa-familia.dto';
import { UpdateBolsaFamiliaDto } from './dto/update-bolsa-familia.dto';

@Injectable()
export class BolsaFamiliaService {
  create(createBolsaFamiliaDto: CreateBolsaFamiliaDto) {
    return 'This action adds a new bolsaFamilia';
  }

  findAll() {
    return `This action returns all bolsaFamilia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bolsaFamilia`;
  }

  update(id: number, updateBolsaFamiliaDto: UpdateBolsaFamiliaDto) {
    return `This action updates a #${id} bolsaFamilia`;
  }

  remove(id: number) {
    return `This action removes a #${id} bolsaFamilia`;
  }
}
