import { IntersectionType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import {CollectionCommonDto} from 'src/common/dto/collection-common.dto';
import { FiltersDocumentDto } from './Select-document.dto';

export class KeywordsDocumentDto {
  @IsString()
  keywords: string;
}
export class SearchFromDocumentDto extends IntersectionType(
  CollectionCommonDto,
  FiltersDocumentDto,
  KeywordsDocumentDto,
) {}

  