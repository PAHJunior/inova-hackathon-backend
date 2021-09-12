import { ApiOperation, ApiTags } from '@nestjs/swagger';

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { CoronavirusService } from './coronavirus.service';
import { CreateCoronavirusDto } from './dto/create-coronavirus.dto';

@ApiTags('Coronavírus')
@Controller('coronavirus')
export class CoronavirusController {
  constructor(private readonly coronavirusService: CoronavirusService) {}

  @ApiOperation({summary: 'Consulta de transferências mensal das despesas do Poder Executivo Federal pela classificação funcional programática' })
  @Get('transfers')
  findAll() {
    return this.coronavirusService.findAll();
  }
  
  @ApiOperation({summary: 'Consulta de movimentação líquida mensal das despesas do Poder Executivo Federal pela classificação funcional programática' })
  @Get('transfers/:id')
  findOne(@Param('id') id: string) {
    return this.coronavirusService.findOne(id);
  }
    
  @ApiOperation({summary: 'Cadastro de transferencia para o municipio' })
  @Post('transfers')
  create(@Body('createCoronavirus') createCoronavirus: CreateCoronavirusDto[]) {
    return this.coronavirusService.create(createCoronavirus);
  }
}
