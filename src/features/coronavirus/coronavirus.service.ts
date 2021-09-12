import { Injectable } from '@nestjs/common';
import { CreateCoronavirusDto } from './dto/create-coronavirus.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Coronavirus, CoronavirusDocument } from './entities/coronavirus.entity';
import { Model } from 'mongoose';
@Injectable()
export class CoronavirusService {
  constructor(@InjectModel(Coronavirus.name) private coronavirusModel: Model<CoronavirusDocument>) {}

  async findAll(): Promise<CreateCoronavirusDto[]> {
    const transfers: CreateCoronavirusDto[] = await this.coronavirusModel.find();
    return transfers
  }

  findOne(id: string) {
    return this.coronavirusModel.findById(id);
  }

  create(createCoronavirusDto: CreateCoronavirusDto) {
    return this.coronavirusModel.create(createCoronavirusDto)
  }
}
