
import { DataSource } from 'typeorm';
import { Labels } from '../entities/labels.entity';

export const labelsProviders = [
  {
    provide: 'LABELS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Labels),
    inject: ['DATA_SOURCE'],
  },
];
