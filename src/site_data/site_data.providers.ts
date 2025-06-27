
import { DataSource } from 'typeorm';
import { Site_data } from './site_data.entity';

export const site_dataProviders = [
  {
    provide: 'SITE_DATA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Site_data),
    inject: ['DATA_SOURCE'],
  },
];
