import { Inject, Injectable } from '@nestjs/common';
import { GOOGLE_AUTH } from 'src/g_services/g_auth/g_auth.provider';
import { google, sheets_v4 } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

// https://developers.google.com/workspace/sheets/api/guides/values?hl=es-419
@Injectable()
export class GsheetsService {
  private sheets: sheets_v4.Sheets;

  constructor(@Inject(GOOGLE_AUTH) private readonly googleAuth: GoogleAuth) {}

  async onModuleInit() {
    this.sheets = google.sheets({ version: 'v4', auth: this.googleAuth });
  }
  
  test(spreadsheetId:string){
    const spreadsheet = this.sheets.spreadsheets.get({
      spreadsheetId: spreadsheetId,
    })
    return spreadsheet;
  }
}
