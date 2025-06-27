
import { Authors } from 'src/documents_environment/authors/authors.entity';
import { Markups } from 'src/documents_environment/markups/markups.entity';
import { Quotes } from 'src/documents_environment/quotes/quotes.entity';
import { External_assets } from 'src/documents_environment/external_assets/external_assets.entity';

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable, DeleteDateColumn, VersionColumn } from 'typeorm';

@Entity()
export class Documents {
  @PrimaryGeneratedColumn()
  documents_id: number;

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
  

  @ManyToMany((type) => Authors)
  @JoinTable()
  authors: Authors[]

  @OneToMany((type) => Markups, (markup) => markup.documents)
  markups: Markups[]

  @OneToMany((type) => Quotes, (quote) => quote.documents)
  quotes: Quotes[]

  @OneToMany((type) => External_assets, (asset) => asset.documents)
  external_assets: External_assets[]
}
