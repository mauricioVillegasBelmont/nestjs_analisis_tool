
import { DataSource } from 'typeorm';
import { Quotes } from './quotes.entity';

export const quotesProviders = [
  {
    provide: 'QUOTES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Quotes),
    inject: ['DATA_SOURCE'],
  },
];
