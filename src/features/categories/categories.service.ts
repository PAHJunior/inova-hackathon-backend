import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProposalDto } from '../proposals/dto/create-proposal.dto';
import { Proposal } from '../proposals/entities/proposal.entity';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Proposal.name) private proposalModel: Model<CreateProposalDto>) {}

  async findAll() {
    const proposals: CreateProposalDto[]  = await  this.proposalModel.find()
    const categories = []

    for (const proposal of proposals) {
      proposal.categories.forEach(element => {
        if (!categories.includes(element)) {
          categories.push(element)
        }
      });
    }

    const categoriesObject = {}
    categories.forEach(function(data){
      categoriesObject[data] = false
    });

    return categoriesObject
  }
}
