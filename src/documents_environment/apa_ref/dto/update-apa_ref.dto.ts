import { PartialType } from '@nestjs/swagger';
import { CreateApaRefDto } from 'documents_environment/apa_ref/dto/create-apa_ref.dto';

export class UpdateApaRefDto extends PartialType(CreateApaRefDto) {}
