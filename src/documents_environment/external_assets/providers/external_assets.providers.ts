
import { DataSource } from 'typeorm';
import { External_assets } from '../entity/external_assets.entity';

export const external_assetsProviders = [
  {
    provide: 'EXTERNAL_ASSETS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(External_assets),
    inject: ['DATA_SOURCE'],
  },
];
