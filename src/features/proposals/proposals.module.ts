import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProposalsService } from './proposals.service';
import { ProposalsController } from './proposals.controller';
import { Proposal, ProposalSchema } from './entities/proposal.entity';

@Module({
  controllers: [ProposalsController],
  providers: [ProposalsService],
  imports: [MongooseModule.forFeature([{ name: Proposal.name, schema: ProposalSchema }])],
})
export class ProposalsModule {}
