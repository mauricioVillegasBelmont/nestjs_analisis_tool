import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentDto } from 'documents_environment/documents/dto/create-document.dto';
import { IsBoolean, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateDocumentDto extends PartialType(CreateDocumentDto) {
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === '1')
  processed?: boolean;
}
