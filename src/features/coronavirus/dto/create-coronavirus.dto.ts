import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsString,
} from 'class-validator';

export enum UFEnum {
  AC = 'AC',
  AL = 'AL',
  AP = 'AP',
  AM = 'AM',
  BA = 'BA',
  CE = 'CE',
  DF = 'DF',
  ES = 'ES',
  GO = 'GO',
  MA = 'MA',
  MT = 'MT',
  MS = 'MS',
  MG = 'MG',
  PA = 'PA',
  PB = 'PB',
  PR = 'PR',
  PE = 'PE',
  PI = 'PI',
  RJ = 'RJ',
  RN = 'RN',
  RS = 'RS',
  RO = 'RO',
  RR = 'RR',
  SC = 'SC',
  SP = 'SP',
  SE = 'SE',
  TO = 'TO',
}
export class CreateCoronavirusDto {
  @ApiProperty({
    type: 'string',
    description: 'Nome da cidade',
  })
  public cidade: string;

  @ApiProperty({
    type: 'string',
    description: 'UF',
  })
  @IsString()
  @IsEnum(UFEnum)
  public uf: string;

  @ApiProperty({
    type: 'number',
    description: 'Price transfer',
  })
  public price: number;

}
