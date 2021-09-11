import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoronavirusService } from './coronavirus.service';
import { CreateCoronavirusDto } from './dto/create-coronavirus.dto';
import { UpdateCoronavirusDto } from './dto/update-coronavirus.dto';

@Controller('coronavirus')
export class CoronavirusController {
  constructor(private readonly coronavirusService: CoronavirusService) {}

  @Post()
  create(@Body() createCoronavirusDto: CreateCoronavirusDto) {
    return this.coronavirusService.create(createCoronavirusDto);
  }

  @Get()
  findAll() {
    return this.coronavirusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coronavirusService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCoronavirusDto: UpdateCoronavirusDto,
  ) {
    return this.coronavirusService.update(+id, updateCoronavirusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coronavirusService.remove(+id);
  }
}
