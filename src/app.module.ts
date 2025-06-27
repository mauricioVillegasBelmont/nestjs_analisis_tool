import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbpediaController } from './dbpedia/dbpedia.controller';
import { DbpediaService } from './dbpedia/dbpedia.service';
import { DbpediaModule } from './dbpedia/dbpedia.module';

import { GsheetsModule } from './g_services/gsheets/gsheets.module';


import { SiteDataModule } from './site_data/site_data.module';

import { DocumentsModule } from './documents_environment/documents/documents.module';
import { LabelsModule } from './documents_environment/labels/labels.module';
import { AuthorsModule } from './documents_environment/authors/authors.module';
import { QuotesModule } from './documents_environment/quotes/quotes.module';
import { MarkupsModule } from './documents_environment/markups/markups.module';
import { ExternalAssetsModule } from './documents_environment/external_assets/external_assets.module';

import { IaServiceModule } from './ia_service/ia_service.module';
import { PyServicesModule } from './py_services/py_services.module';




@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    AuthorsModule,
    DbpediaModule,
    DocumentsModule,
    ExternalAssetsModule,
    GsheetsModule,
    IaServiceModule,
    LabelsModule,
    MarkupsModule,
    PyServicesModule,
    QuotesModule,
    SiteDataModule,
  ],
  controllers: [AppController, DbpediaController],
  providers: [AppService, DbpediaService],
})
export class AppModule {}
