import { Injectable, Query } from '@nestjs/common';
import { IAFactory } from './factory/ia_factory';

import * as fs from 'fs';
import { join } from 'path';
import { IACleanResponse, IAConfig } from './factory/ia_service.types';

@Injectable()
export class IAService {
  constructor(private readonly iaFactory: IAFactory) {}

  get_ia_role(prompt:string):string{
    const propts_path = 'src/ia_service/prompts/'
    const file = join( propts_path, `${prompt}.md`)
    try {
      const data = fs.readFileSync(file, 'utf-8');
      return data;
    } catch (err) {
      throw new Error(`Error reading file: ${err}`);
    }
  }
  cleanResponse(response):IACleanResponse{
    return this.iaFactory.cleanResponse(response)
  }


  query(query:string,config:Partial<IAConfig>){
    return this.iaFactory.query(query,config)
  }
}
