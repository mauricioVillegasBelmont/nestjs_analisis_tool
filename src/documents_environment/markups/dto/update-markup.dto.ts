import { PartialType } from '@nestjs/swagger';
import { CreateMarkupDto } from 'documents_environment/markups/dto/create-markup.dto';

export class UpdateMarkupDto extends PartialType(CreateMarkupDto) {}
