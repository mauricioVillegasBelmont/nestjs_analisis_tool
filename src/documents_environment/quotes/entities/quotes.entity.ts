
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, VersionColumn, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToMany, JoinTable } from 'typeorm';


import { Documents } from 'documents_environment/documents/entities/documents.entity';
import { ApaRef } from 'documents_environment/apa_ref/entities/apa_ref.entity';
import { Labels } from 'documents_environment/labels/entities/labels.entity';
import { Authors } from 'documents_environment/authors/entities/authors.entity';



@Entity()
export class Quotes {
  @PrimaryGeneratedColumn()
  quotes_id: number;

  @Column('text')
  quote: string;

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



  @ManyToOne(()=>ApaRef, apaRef=>apaRef.quotes)
  @JoinColumn({ name: 'apa_ref_id' })
  apaRef: ApaRef;

  @ManyToOne(() => Documents, (document) => document.quote)
  @JoinColumn({ name: 'document_id' })
  documents: Documents;

  @ManyToMany(() => Labels, label => label.documents)
  @JoinTable({
    name: 'quotes_labels',
    joinColumn: { name: 'quotes_id', referencedColumnName: 'quotes_id' },
    inverseJoinColumn: { name: 'label_id', referencedColumnName: 'label_id' },
  })
  labels: Labels[];

  @ManyToMany(() => Authors, author => author.documents)
  @JoinTable({
    name: 'quotes_authors',
    joinColumn: { name: 'quotes_id', referencedColumnName: 'quotes_id' },
    inverseJoinColumn: { name: 'author_id', referencedColumnName: 'author_id' },
  })
  authors: Authors[];

}
