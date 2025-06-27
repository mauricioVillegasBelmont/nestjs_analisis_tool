import { Controller, Post } from '@nestjs/common';
import { GsheetsService } from './gsheets.service';

@Controller('gsheets')
export class GsheetsController {
  constructor(
    private readonly gsheetsService:GsheetsService
  ){}

  @Post('test')
  async test(){
    try{
      const sheet = await this.gsheetsService.test('1UJki7gQWGdSmTCSSdE_vzF39VKdzGFsw1Nd9EH3qoTg')
      return `${sheet.data.properties?.title}`;
    }catch (error){
      return error instanceof Error ? error.message : typeof(error) == 'string' ? error:'An error occurred'
    }
  }
}
