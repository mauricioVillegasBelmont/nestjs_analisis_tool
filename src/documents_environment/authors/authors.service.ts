import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from 'documents_environment/authors/dto/create-author.dto';
import { UpdateAuthorDto } from 'documents_environment/authors/dto/update-author.dto';

@Injectable()
export class AuthorsService {
  create(createAuthorDto: CreateAuthorDto) {
    return 'This action adds a new author';
  }

  findAll() {
    return `This action returns all authors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
