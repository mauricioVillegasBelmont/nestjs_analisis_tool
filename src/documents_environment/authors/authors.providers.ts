
import { DataSource } from 'typeorm';
import { Authors } from './authors.entity';

export const authorsProviders = [
  {
    provide: 'AUTHORS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Authors),
    inject: ['DATA_SOURCE'],
  },
];
