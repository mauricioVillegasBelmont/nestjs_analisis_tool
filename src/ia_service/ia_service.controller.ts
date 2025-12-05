import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { IAService } from 'ia_service/ia_service.service';
import { ApiResponse } from 'common/interfaces/response.interface';
import { IAConfig } from 'ia_service/factory/ia_service.types';

interface IAServiceResponce{
  body?:{[key:string]:any} | any;
  test?:any;
}

@Controller('ia-service')
export class IaServiceController {
  constructor(private readonly iaService: IAService){}

  @Post('test')
  async testing(@Body('query') query:string): Promise<ApiResponse<IAServiceResponce>> {
    try{
      const ia_role = 'eres un asistente virutal en una prueba de configuración de API. solo responde con información corta, basica, clara y concisa sin profundizar en detalles a menos que se te solicite';
      const config ={
        system_role: ia_role,
        max_tokens: 1000,
      }

      const response = await this.iaService.query(query,config)
      const body = this.iaService.cleanResponse({...response})

      return {
        status: 'ok',
        statusCode: HttpStatus.OK,
        message: 'success',
        data: {
          body:body,
        }
      };

    }catch(err){
      return {
        status: 'fail',
        statusCode:   HttpStatus.NOT_IMPLEMENTED,
        message: err instanceof Error ? err.message : typeof(err) == 'string' ? err:'An error occurred',
      };
    }
  }
  @Post('process_article')
  // cleanHtml(): string {
  async cleanHtml(@Body('query') query: string): Promise<ApiResponse<IAServiceResponce>> {
    try{
      if (!query) throw new Error('HTML content is required');
      const ia_role = this.iaService.get_ia_role('documents/semanitic_html_clean-up')
      const config:Partial<IAConfig> ={
        system_role: ia_role,
        model: "deepseek-chat",
        response_type: 'json_object',
        max_tokens: 4000,
        temperature: 0.3,
      }

      const response = await this.iaService.query(query,config)
      const body = this.iaService.cleanResponse({...response})


      return {
        status: 'ok',
        statusCode: HttpStatus.OK,
        message: 'success',
        data: {
          body:body
        }
      };
    }catch(err){
      return {
        status: 'fail',
        statusCode:   HttpStatus.NOT_IMPLEMENTED,
        message: err instanceof Error ? err.message : typeof(err) == 'string' ? err:'An error occurred',
      };
    }
  }
}
