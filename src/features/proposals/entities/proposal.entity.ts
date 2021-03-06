import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
  public categories: [string];

  @Prop({
    description: 'Date of proposal',
  })
  public dhProposal: Date;

  @Prop({
    description: 'Date of created of document',
  })
  public dhCreate: Date = new Date();

  @Prop({
    description: 'UF'
  })
  public uf: string;

  @Prop({
    description: 'Nome da cidade',
  })
  public cidade: string;
}

export const ProposalSchema = SchemaFactory.createForClass(Proposal);
