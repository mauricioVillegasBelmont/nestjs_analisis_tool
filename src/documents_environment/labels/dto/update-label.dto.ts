import { PartialType } from '@nestjs/swagger';
import { CreateLabelDto } from 'documents_environment/labels/dto/create-label.dto';

export class UpdateLabelDto extends PartialType(CreateLabelDto) {}
