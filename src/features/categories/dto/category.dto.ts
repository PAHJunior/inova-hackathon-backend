import { ApiProperty } from '@nestjs/swagger';
export class CategoryDto {
  @ApiProperty({
    type: 'string',
    description: 'Nome da category',
  })
  public category: string;
}
