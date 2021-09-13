import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsString,
} from 'class-validator';

export class ParamsProposalDto {
  @ApiProperty({
    required: false,
    type: 'string',
    description: 'Title of proposal',
  })
  @IsString()
  public title: string;

  @ApiProperty({
    type: 'string',
    description: 'Author of proposal',
    required: false,
  })
  @IsString()
  public author: string;
  
  @ApiProperty({
    required: false,
    type: 'string',
    description: 'Description of proposal',
  })
  @IsString()
  public description: string;

  @ApiProperty({
    required: false,
    type: 'string',
    description: 'Uf',
  })
  @IsString()
  public uf: string;

  @ApiProperty({
    required: false,
    type: 'string',
    description: 'Nome da cidade'})
  @IsString()
  public cidade: string;

  @ApiProperty({
    required: false,
    type: 'string',
    description: 'Categories of proposal',
    example: 'Coronavirus,Economia'
  })
  @IsArray()
  public categories: string;
}
