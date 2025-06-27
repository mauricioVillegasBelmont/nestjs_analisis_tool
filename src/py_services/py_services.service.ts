import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { PythonShell } from 'python-shell';

@Injectable()
export class PyServicesService {
  ps_options ={
    pythonPath: process.env.PYTHON_PATH || 'python3',
    scriptPath: join(__dirname,'../..','src/py_services/scripts'),
  }

  async pdf_file_to_html(app_dir, pdf_file, assets_path, output_path, output_filename) {
    await PythonShell.run('pdf2html.py', {
      ...this.ps_options,
      args: [app_dir, pdf_file, assets_path, output_path, output_filename],
    }).then(results => {
      console.log(results);
      return results;
    }).catch(err => {
      console.error('Error running Python script:', err);
      throw new Error(err);
    })
  }
  async pdf_buffer_to_html(file: Express.Multer.File, assets_path:string, prefix:string){
    return new Promise((resolve, reject) => {
      const pyshell = new PythonShell('buffer2html.py', {
        ...this.ps_options,
        mode: 'text',
        pythonOptions: ['-u'],
        args: [assets_path, prefix], // assets_path, filename_prefix
        stdio: ['pipe', 'pipe', 'pipe']
      })
  
      let htmlResult = '';
      pyshell.stdout?.on('data', data => htmlResult += data.toString());
      pyshell.stderr?.on('data', err =>  reject(err));
      pyshell.stderr?.on('error', err =>  reject(err));
      pyshell.on('close', () => resolve(htmlResult));
      
      pyshell.stdin?.write(file.buffer);
      pyshell.stdin?.end();
    })
  }
}
