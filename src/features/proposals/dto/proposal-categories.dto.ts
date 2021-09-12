import { ApiProperty } from '@nestjs/swagger';

export class ProposalCategoriesDto {
  @ApiProperty({
    type: 'string',
    description: 'Title of Categorie',
  })
  public title: string;

  @ApiProperty({
    type: 'string',
    description: 'Description of categorie',
  })
  public description?: string;
}
