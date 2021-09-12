import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ProposalCategoriesDto } from './proposal-categories.dto';

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
    type: 'string',
    description: 'Date of proposal',
  })
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  public dhProposal: Date;

  @ApiProperty({
    type: 'string',
    description: 'UF',
  })
  @ValidateNested({ each: true })
  @Type(() => ProposalCategoriesDto)
  public categories: ProposalCategoriesDto[];
}
