import { PartialType } from '@nestjs/swagger';
import { CreateAuthorDto } from 'documents_environment/authors/dto/create-author.dto';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {}
