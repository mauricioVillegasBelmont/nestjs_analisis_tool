import { Inject, Injectable } from '@nestjs/common';
import { GOOGLE_AUTH } from 'g_services/g_auth/g_auth.provider';
import { google, sheets_v4 } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

// https://developers.google.com/workspace/sheets/api/guides/values?hl=es-419
@Injectable()
export class GsheetsService {
  private sheets: sheets_v4.Sheets;

  constructor(@Inject(GOOGLE_AUTH) private readonly googleAuth: GoogleAuth) {}

  onModuleInit() {
    this.sheets = google.sheets({ version: 'v4', auth: this.googleAuth });
  }

  async test(spreadsheetId: string): Promise<any> {
    const response: any = await this.sheets.spreadsheets.get({
      spreadsheetId: spreadsheetId,
    });
    return response;
  }
}
