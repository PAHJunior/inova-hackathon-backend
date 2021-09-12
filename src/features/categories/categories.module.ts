import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Proposal, ProposalSchema } from '../proposals/entities/proposal.entity';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [MongooseModule.forFeature([{ name: Proposal.name, schema: ProposalSchema }])],
})
export class CategoriesModule {}
