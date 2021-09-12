import { Injectable } from '@nestjs/common';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Proposal, ProposalDocument } from './entities/proposal.entity';
import { Model } from 'mongoose';
import { ParamsProposalDto } from './dto/params-proposal.dto';

@Injectable()
export class ProposalsService {
  constructor(@InjectModel(Proposal.name) private proposalModel: Model<CreateProposalDto>) {}

  create(createProposal: CreateProposalDto[]) {
    return this.proposalModel.create(createProposal)
  }

  findAll(params: ParamsProposalDto) {
    let query = {}
    if (params.categories) {
      query = {
        ...query,
        categories: { "$in" : params.categories}
      }
    }

    return this.proposalModel.find(query)
  }

  findOne(id: string) {
    return this.proposalModel.findById(id)
  }
}
