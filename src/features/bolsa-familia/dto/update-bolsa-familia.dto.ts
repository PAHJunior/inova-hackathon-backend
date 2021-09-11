import { PartialType } from '@nestjs/mapped-types';
import { CreateBolsaFamiliaDto } from './create-bolsa-familia.dto';

export class UpdateBolsaFamiliaDto extends PartialType(CreateBolsaFamiliaDto) {}
