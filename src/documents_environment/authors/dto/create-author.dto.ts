import { IntersectionType } from '@nestjs/mapped-types';
import { CollectionCommonDto } from 'common/dto/collection-common.dto';
import { IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateAuthorDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  link?: string;
}

export class FilterAuthorDto {
  @IsOptional()
  @IsString()
  authors_id?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  link?: string;
}

export class SelectAuthorDto extends IntersectionType(
  CollectionCommonDto,
  FilterAuthorDto,
) {}
