import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

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
    description: 'Categories of proposal',
  })
  @IsArray()
  public categories: [string];
}
