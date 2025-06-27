import { PartialType } from '@nestjs/swagger';
import { CreateSiteDatumDto } from './create-site_datum.dto';

export class UpdateSiteDatumDto extends PartialType(CreateSiteDatumDto) {}
