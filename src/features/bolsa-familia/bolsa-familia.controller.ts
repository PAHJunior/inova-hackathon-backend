import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BolsaFamiliaService } from './bolsa-familia.service';
import { CreateBolsaFamiliaDto } from './dto/create-bolsa-familia.dto';
import { UpdateBolsaFamiliaDto } from './dto/update-bolsa-familia.dto';

@Controller('bolsa-familia')
export class BolsaFamiliaController {
  constructor(private readonly bolsaFamiliaService: BolsaFamiliaService) {}

  @Post()
  create(@Body() createBolsaFamiliaDto: CreateBolsaFamiliaDto) {
    return this.bolsaFamiliaService.create(createBolsaFamiliaDto);
  }

  @Get()
  findAll() {
    return this.bolsaFamiliaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bolsaFamiliaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBolsaFamiliaDto: UpdateBolsaFamiliaDto,
  ) {
    return this.bolsaFamiliaService.update(+id, updateBolsaFamiliaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bolsaFamiliaService.remove(+id);
  }
}
