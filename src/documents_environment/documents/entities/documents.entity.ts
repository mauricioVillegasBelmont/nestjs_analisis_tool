import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable, DeleteDateColumn, VersionColumn } from 'typeorm';


import { Authors } from 'documents_environment/authors/entities/authors.entity';
import { Markups } from 'documents_environment/markups/entities/markups.entity';
import { Quotes } from 'documents_environment/quotes/entities/quotes.entity';
import { External_assets } from 'documents_environment/external_assets/entity/external_assets.entity';
import { ApaRef } from 'documents_environment/apa_ref/entities/apa_ref.entity';
import { Labels } from 'documents_environment/labels/entities/labels.entity';


@Entity()
export class Documents {
  @PrimaryGeneratedColumn()
  document_id: number;

  @Column({ length: 512 })
  title: string;

  @Column('text')
  abstract: string;

  @Column('text')
  metodology: string;

  @Column('text')
  conclusions: string;

  @Column('longtext')
  content: string;

  @Column({
    default:'other',
    type:'enum', enum:[
      "book",
      "academic_research",
      "web_essay_article",
      "other"
    ]
  })
  category: "book" |
  "academic_research" |
  "web_essay_article" |
  "other";

  @Column({ default: 'other',
    type: 'enum', enum: [
    'other',
    'validation',
    'technique',
    'design_study',
    'systems',
    'evaluation',
    'model',
  ] })
  type: 'other' |
    'validation' |
    'technique' |
    'design_study' |
    'systems' |
    'evaluation' |
    'model';

  @Column({ length: 512 })
  online_url: string;

  @Column({ length: 512 })
  drive_url: string;

  @Column({ length: 512 })
  apa_ref: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @DeleteDateColumn()
  deletedDate: Date

  @VersionColumn()
  version: number

  @Column('tinyint',{ default: 1 })
  status: number;




  @OneToMany(() => ApaRef, apaRef => apaRef.document)
  apaRefs: ApaRef[];

  @OneToMany(() => Quotes, (quote) => quote.documents)
  quote: Quotes[]

  @ManyToMany(() => Authors, author => author.documents)
  @JoinTable({
    name: 'documents_authors',
    joinColumn: { name: 'document_id', referencedColumnName: 'document_id' },
    inverseJoinColumn: { name: 'author_id', referencedColumnName: 'author_id' }
  })
  authors: Authors[];

  @ManyToMany(() => Labels, label => label.documents)
  @JoinTable({
    name: 'documents_labels',
    joinColumn: { name: 'document_id', referencedColumnName: 'document_id' },
    inverseJoinColumn: { name: 'label_id', referencedColumnName: 'label_id' },
  })
  labels: Labels[];

  @OneToMany(() => Markups, (markup) => markup.documents)
  markups: Markups[]

  @OneToMany(() => External_assets, (asset) => asset.document)
  external_assets: External_assets[]
}
