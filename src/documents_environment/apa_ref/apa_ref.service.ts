import { Injectable } from '@nestjs/common';
import { CreateApaRefDto } from 'documents_environment/apa_ref/dto/create-apa_ref.dto';
import { UpdateApaRefDto } from 'documents_environment/apa_ref/dto/update-apa_ref.dto';

@Injectable()
export class ApaRefService {
  create(createApaRefDto: CreateApaRefDto) {
    return 'This action adds a new apaRef';
  }

  findAll() {
    return `This action returns all apaRef`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apaRef`;
  }

  update(id: number, updateApaRefDto: UpdateApaRefDto) {
    return `This action updates a #${id} apaRef`;
  }

  remove(id: number) {
    return `This action removes a #${id} apaRef`;
  }
}
