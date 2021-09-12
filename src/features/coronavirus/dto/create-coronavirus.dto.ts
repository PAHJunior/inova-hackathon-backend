import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
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
    description: 'Codigo IBGE do municipio',
  })
  public municipio: number;

  @ApiProperty({
    type: 'string',
    description: 'UF',
  })
  @IsString()
  public uf: string;

  @ApiProperty({
    type: 'string',
    description: 'UF',
  })
  @IsEnum(UFEnum)
  public price: number;

}
