import { IsNumber, IsOptional, IsString } from 'class-validator';


export class CollectionCommonDto {
  @IsOptional()
  @IsNumber()
  limit: number;

  @IsOptional()
  @IsNumber()
  offset: number;

  @IsOptional()
  @IsString()
  orderBy: string;

  @IsOptional()
  @IsString()
  order: 'ASC'|'DESC';
}
