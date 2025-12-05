import { PartialType } from '@nestjs/swagger';
import { CreateSiteDatumDto } from 'site_data/dto/create-site_datum.dto';

export class UpdateSiteDatumDto extends PartialType(CreateSiteDatumDto) {}
