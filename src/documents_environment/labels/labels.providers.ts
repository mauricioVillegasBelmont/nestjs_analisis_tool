
import { DataSource } from 'typeorm';
import { LabelsReferences, Labels } from './labels.entity';

export const labelsProviders = [
  {
    provide: 'LABELS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Labels),
    inject: ['DATA_SOURCE'],
  },
];
export const label_referencesProviders = [
  {
    provide: 'LABELS_REFERENCES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(LabelsReferences),
    inject: ['DATA_SOURCE'],
  },
];
