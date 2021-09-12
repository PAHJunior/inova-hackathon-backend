import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CoronavirusDocument = Coronavirus & Document;
@Schema()
export class Coronavirus {
  @Prop({
    required: true,
  })
  cidade: string;

  @Prop({
    required: true,
  })
  uf: string;
  
  @Prop({
    required: true,
  })
  price: number;

  @Prop()
  dhCreate: Date = new Date();
}

export const CoronavirusSchema = SchemaFactory.createForClass(Coronavirus);
