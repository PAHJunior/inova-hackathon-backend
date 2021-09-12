import { Injectable } from '@nestjs/common';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Proposal, ProposalDocument } from './entities/proposal.entity';
import { Model } from 'mongoose';
import { ParamsProposalDto } from './dto/params-proposal.dto';

@Injectable()
export class ProposalsService {
  constructor(@InjectModel(Proposal.name) private proposalModel: Model<CreateProposalDto>) {}

  create(createProposal: CreateProposalDto) {
    return this.proposalModel.create(createProposal)
  }

  findAll(params: ParamsProposalDto) {
    let query = {
      title: { $regex: new RegExp(params.title), $options: 'i' },
      author: { $regex: new RegExp(params.author), $options: 'i' },
      description: { $regex: new RegExp(params.description), $options: 'i' },
      uf: { $regex: new RegExp(params.uf), $options: 'i' },
      cidade: { $regex: new RegExp(params.cidade), $options: 'i' },
      [params.categories? 'categories' : null] : { "$in" : params.categories.split(',')},
    }
    return this.proposalModel.find(query)
  }

  findOne(id: string) {
    return this.proposalModel.findById(id)
  }
}
