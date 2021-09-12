import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

export class ParamsProposalDto {
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
    description: 'Categories of proposal',
  })
  @IsArray()
  public categories: [string];
}
