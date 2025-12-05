
import { DataSource } from 'typeorm';
import { Documents } from '../entities/documents.entity';

export const documentsProviders = [
  {
    provide: 'DOCUMENTS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Documents),
    inject: ['DATA_SOURCE'],
  },
];
