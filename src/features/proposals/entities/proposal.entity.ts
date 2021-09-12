import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ProposalCategoriesDto } from '../dto/proposal-categories.dto';

export type ProposalDocument = Proposal & Document;
@Schema()
export class Proposal {
  @Prop({
    required: true,
    type: 'string',
    description: 'Title of proposal',
  })
  public title: string;

  @Prop({
    required: true,
    type: 'string',
    description: 'Description of proposal',
  })
  public description: string;
  
  @Prop({
    required: true,
    type: 'string',
    description: 'Author of proposal',
  })
  public author: string;

  @Prop({
    description: 'Categories of proposal',
  })
  public categories: ProposalCategoriesDto[];

  @Prop({
    description: 'Date of proposal',
  })
  public dhProposal: Date;

  @Prop({
    description: 'Date of created of document',
  })
  public dhCreate: Date = new Date();
}

export const ProposalSchema = SchemaFactory.createForClass(Proposal);
