
import { DataSource } from 'typeorm';
import { Markups } from '../entities/markups.entity';

export const markupsProviders = [
  {
    provide: 'MARKUPS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Markups),
    inject: ['DATA_SOURCE'],
  },
];
