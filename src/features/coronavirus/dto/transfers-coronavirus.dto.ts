import { PartialType } from '@nestjs/mapped-types';
import { CreateCoronavirusDto } from './create-coronavirus.dto';

export class TransfersCoronavirusDto extends PartialType(CreateCoronavirusDto) {
  
}
