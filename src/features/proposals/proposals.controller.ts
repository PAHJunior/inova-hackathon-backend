import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProposalsService } from './proposals.service';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { ParamsProposalDto } from './dto/params-proposal.dto';

@ApiTags('Proposals')
@Controller('proposals')
export class ProposalsController {
  constructor(private readonly proposalsService: ProposalsService) {}

  @Post()
  create(@Body('createProposal') createProposal: CreateProposalDto[]) {
    return this.proposalsService.create(createProposal);
  }

  @Get()
  findAll(@Query() params?: ParamsProposalDto,) {
    return this.proposalsService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proposalsService.findOne(id);
  }
}
