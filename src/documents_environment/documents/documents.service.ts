import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { Documents } from './documents.entity';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Injectable()
export class DocumentsService {
  constructor(
    @Inject('DOCUMENTS_REPOSITORY')
    private documentsRepository: Repository<Documents>,
  ) {}
  private queryHelper(queryParams){
    const {name=true,type=true,content=true,url=true,processed=true,created=true,limit = 500,offset=0,orderBy='id',order='ASC'} = queryParams
    
    const selectParams = {
      documents_id: true,
      name: name,
      content: content,
      type: type,
      url:url,
      created:created,
      processed: processed,
    }
    const orderParams = {}
    orderParams[orderBy!='id'?orderBy:`documents_id`] = order;

    return {
      select:{...selectParams},
      take: limit,
      skip: offset,
      order: {...orderParams}
    }
  }


  async search(
    queryParams, 
  ):Promise<Documents[] | null> {
    const query = this.queryHelper(queryParams);
    const keywords = queryParams.keywords
    .replace(/[\/#!\^&\*;:{}=\-_`~()]/g,"")
    .split(" ")
    .filter((currentValue, index, arr) => (
      arr.indexOf(currentValue) === index
    ))
    .filter(keyword => {
      // Más de 1 letra
      if (/^[a-zA-Z]{3,}$/.test(keyword)) return true;

      // Número de al menos 2 cifras
      if (/^\d{2,}$/.test(keyword)) return true;

      // Símbolo seguido de número, o número seguido de símbolo
      if (/^[^\w\s]*\d+|\d+[^\w\s]*$/.test(keyword)) return true;

      return false;
    })
    .reduce((acc, keyword) => {
      return acc.concat([
        { name: `%${keyword}%` },
        { content: `%${keyword}%` },
      ]);
    }, []);

    // return keywords

    return this.documentsRepository.find({
      ...query,
      where: [...keywords],
    });
  }

  async create(createDocumentDto: CreateDocumentDto):Promise<Documents | string> {
    return 'This action adds a new document';
  }

  async findAll(
    queryParams, 
  ):Promise<Documents[] | string> {
    const query = this.queryHelper(queryParams)
    return this.documentsRepository.find({
      ...query
    });
  }

  

  async findOneOrFail(id: number,queryParams):Promise<Documents | null> {
    try {
      const query = this.queryHelper(queryParams)
      return await this.documentsRepository.findOneOrFail({
        ...query,
        where: { documents_id: id },
      });
    } catch (error) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }
  }

  async update(id: number, updateDocumentDto: UpdateDocumentDto):Promise<Documents | string> {
    return await `This action updates a #${id} document`;
  }

  async remove(id: number):Promise<Documents | string> {
    return await `This action removes a #${id} document`;
  }
}
