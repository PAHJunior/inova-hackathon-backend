import { Injectable } from '@nestjs/common';
import { CreateCoronavirusDto } from './dto/create-coronavirus.dto';
import { UpdateCoronavirusDto } from './dto/update-coronavirus.dto';

@Injectable()
export class CoronavirusService {
  create(createCoronavirusDto: CreateCoronavirusDto) {
    return 'This action adds a new coronavirus';
  }

  findAll() {
    return `This action returns all coronavirus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coronavirus`;
  }

  update(id: number, updateCoronavirusDto: UpdateCoronavirusDto) {
    return `This action updates a #${id} coronavirus`;
  }

  remove(id: number) {
    return `This action removes a #${id} coronavirus`;
  }
}
