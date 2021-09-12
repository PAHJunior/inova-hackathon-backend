import { Injectable } from '@nestjs/common';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Proposal, ProposalDocument } from './entities/proposal.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProposalsService {
  constructor(@InjectModel(Proposal.name) private proposalModel: Model<CreateProposalDto>) {}

  create(createProposal: CreateProposalDto[]) {
    return this.proposalModel.create(createProposal)
  }

  findAll() {
    return this.proposalModel.find()
  }

  findOne(id: string) {
    return this.proposalModel.findById(id)
  }
}
