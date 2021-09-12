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

export class CategoryDto {
  @ApiProperty({
    type: 'string',
    description: 'Nome da category',
  })
  public category: string;
}
