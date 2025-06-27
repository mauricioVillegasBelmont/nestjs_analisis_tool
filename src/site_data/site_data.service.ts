import { Injectable } from '@nestjs/common';
import { CreateSiteDatumDto } from './dto/create-site_datum.dto';
import { UpdateSiteDatumDto } from './dto/update-site_datum.dto';

@Injectable()
export class SiteDataService {
  create(createSiteDatumDto: CreateSiteDatumDto) {
    return 'This action adds a new siteDatum';
  }

  findAll() {
    return `This action returns all siteData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} siteDatum`;
  }

  update(id: number, updateSiteDatumDto: UpdateSiteDatumDto) {
    return `This action updates a #${id} siteDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} siteDatum`;
  }
}
