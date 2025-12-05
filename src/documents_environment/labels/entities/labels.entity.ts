
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, VersionColumn, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

import { Documents } from 'documents_environment/documents/entities/documents.entity';
import { Authors } from 'documents_environment/authors/entities/authors.entity';
import { ApaRef } from 'documents_environment/apa_ref/entities/apa_ref.entity';
import { Quotes } from 'documents_environment/quotes/entities/quotes.entity';
import { Markups } from 'documents_environment/markups/entities/markups.entity';
import { External_assets } from 'documents_environment/external_assets/entity/external_assets.entity';

@Entity()
export class Labels {
  @PrimaryGeneratedColumn()
  label_id: number;

  @Column({ length: 512 })
  name: string;

  @Column('tinytext')
  description: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @VersionColumn()
  version: number;

  @Column('tinyint', { default: 1 })
  status: number;




  @ManyToMany(() => Documents, document => document.labels)
  @JoinTable({
    name: 'documents_labels',
    joinColumn: { name: 'label_id', referencedColumnName: 'label_id' },
    inverseJoinColumn: { name: 'document_id', referencedColumnName: 'document_id' },
  })
  documents: Documents[];

  @ManyToMany(() => Authors, author => author.labels)
  @JoinTable({
    name: 'authors_labels',
    joinColumn: { name: 'label_id', referencedColumnName: 'label_id' },
    inverseJoinColumn: { name: 'author_id', referencedColumnName: 'author_id' },
  })
  authors: Authors[];
  // @ManyToMany(() => Authors, author => author.labels)
  // authors: Authors[];

  @ManyToMany(() => ApaRef, aparef => aparef.labels)
  @JoinTable({
    name: 'apa_ref_labels',
    joinColumn: { name: 'label_id', referencedColumnName: 'label_id' },
    inverseJoinColumn: { name: 'apa_ref_id', referencedColumnName: 'apa_ref_id' },
  })
  aparef: ApaRef[];

  @ManyToMany(() => Quotes, quote => quote.labels)
  @JoinTable({
    name: 'quotes_labels',
    joinColumn: { name: 'label_id', referencedColumnName: 'label_id' },
    inverseJoinColumn: { name: 'quotes_id', referencedColumnName: 'quotes_id' },
  })
  quotes: Quotes[];

  @ManyToMany(() => Markups, markup => markup.labels)
  @JoinTable({
    name: 'markups_labels',
    joinColumn: { name: 'label_id', referencedColumnName: 'label_id' },
    inverseJoinColumn: { name: 'markup_id', referencedColumnName: 'markup_id' },
  })
  markups: Markups[];

  @ManyToMany(() => External_assets, assets => assets.labels)
  @JoinTable({
    name: 'assets_labels',
    joinColumn: { name: 'label_id', referencedColumnName: 'label_id' },
    inverseJoinColumn: { name: 'external_asset_id', referencedColumnName: 'external_asset_id' },
  })
  external_assets: External_assets[];

}

