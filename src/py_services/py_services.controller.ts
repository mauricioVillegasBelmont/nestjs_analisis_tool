import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Controller, Get, Header, HttpStatus, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ApiResponse } from 'src/common/interfaces/response.interface';
import { PyServicesService } from './py_services.service';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

import * as fs from 'fs';

interface FileResponse {
  success: string[];
  buffer?: {[key:string]:any};
}

@Controller('pdf2html')
export class PyServicesController {
  constructor(private readonly pyServicesService: PyServicesService) {}

  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: join(__dirname, '../..', 'public/files'),
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFiles() files: Array<Express.Multer.File>
  ):ApiResponse<FileResponse> {
    const success:string[] = []
    try {
      if (!files || files.length === 0) {
        throw new Error('No files uploaded');
      }
      files.forEach(file =>{
        const file_name = file.filename?.split('.')[0] ?? file.originalname?.split('.')[0];
        const app_dir = join(__dirname, '../..','/');
        const pdf_file= join('public/files/') + `${file_name}.pdf`;
        const assets_rel_path = join('public/img/');
        const output_path= join('public/views/documents/');
        const output_filename = `${file_name}.hbs`;
  
        fs.accessSync(app_dir+pdf_file, fs.constants.F_OK);
        console.log([app_dir, pdf_file, assets_rel_path, output_path, output_filename])
        this.pyServicesService.pdf_file_to_html(app_dir, pdf_file, assets_rel_path, output_path, output_filename);

        success.push(
          `${file.originalname} uploaded as ${file_name}`
        )
      })
      return {
        status: 'ok',
        statusCode:  HttpStatus.OK,
        message: 'Files uploaded successfully',
        data: {success:success},
      }
    } catch (err) {
      return {
        status: 'fail',
        statusCode:   HttpStatus.NOT_IMPLEMENTED,
        message: err instanceof Error ? err.message : typeof(err) == 'string' ? err:'An error occurred',
        data: {success:success},
      };
    }
  }

  @Post('buffer')
  @UseInterceptors(FileInterceptor('files'))
  fromStreamTest(
    @UploadedFiles() files: Array<Express.Multer.File>
  ):ApiResponse<FileResponse> {
    const success:string[] = []
    const buffer= {};
    try {
      if (!files || files.length === 0) {
        throw new Error('No files uploaded');
      }
      files.forEach(file=>{
        if (!file || !file.buffer) {
          throw new Error('No file uploaded or file buffer is empty');
        }
        const assets_path = join(__dirname, '../..','public/img/');
        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1e9);

        buffer[uniquePrefix]['originalName'] = file.originalname;
        buffer[uniquePrefix]['html'] = this.pyServicesService.pdf_buffer_to_html(file, assets_path, uniquePrefix);
        
        success.push(
          `${file.originalname} parced to HTML`
        )
      })
      return {
        status: 'ok',
        statusCode:  HttpStatus.OK,
        message: 'Files parced to HTML successfully',
        data: {success:success,buffer:buffer},
      }
    } catch (err) {
      return {
        status: 'fail',
        statusCode:   HttpStatus.NOT_IMPLEMENTED,
        message: err instanceof Error ? err.message : typeof(err) == 'string' ? err:'An error occurred',
        data: {success:success},
      };
    }
  }

  

}
