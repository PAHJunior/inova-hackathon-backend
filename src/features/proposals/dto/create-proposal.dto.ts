import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { UFEnum } from 'src/features/coronavirus/dto/create-coronavirus.dto';

export class CreateProposalDto {
  @ApiProperty({
    type: 'string',
    description: 'Title of proposal',
  })
  @IsNotEmpty()
  @IsString()
  public title: string;
  
  @ApiProperty({
    type: 'string',
    description: 'Description of proposal',
  })
  @IsNotEmpty()
  @IsString()
  public description: string;

  @ApiProperty({
    type: 'string',
    description: 'Author of proposal',
  })
  @IsString()
  public author: string;

  @ApiProperty({
    required: false,
    type: 'string',
    description: 'Uf',
  })
  @IsString()
  @IsEnum(UFEnum)
  public uf: string;

  @ApiProperty({
    required: false,
    type: 'string',
    description: 'Nome da ciade cidade',
  })
  @IsString()
  public cidade: string;

  @ApiProperty({
    type: 'string',
    description: 'Date of proposal',
  })
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  public dhProposal: Date;

  @ApiProperty({
    type: 'string',
    description: 'Categories of proposal',
  })
  @IsArray()
  public categories: [string];
}
