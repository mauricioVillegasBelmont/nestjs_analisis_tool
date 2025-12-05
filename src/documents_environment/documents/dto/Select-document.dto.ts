import { IntersectionType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import {CollectionCommonDto} from 'common/dto/collection-common.dto';

export class FiltersDocumentDto {
  @IsOptional()
  @IsBoolean()
  @Transform(({ value} ) => value === 'true' || value === '1')
  title?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value} ) => value === 'true' || value === '1')
  type?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value} ) => value === 'true' || value === '1')
  content?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value} ) => value === 'true' || value === '1')
  online_url?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value} ) => value === 'true' || value === '1')
  created?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value} ) => value === 'true' || value === '1')
  processed?: boolean;
}
export class FilterFromDocumentDto extends IntersectionType(
  CollectionCommonDto,
  FiltersDocumentDto,
) {}

