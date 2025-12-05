
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

import { Documents } from 'documents_environment/documents/entities/documents.entity';
import { ApaRef } from 'documents_environment/apa_ref/entities/apa_ref.entity';
import { Quotes } from 'documents_environment/quotes/entities/quotes.entity';
import { Labels } from 'documents_environment/labels/entities/labels.entity';

@Entity()
export class Authors {
  @PrimaryGeneratedColumn()
  author_id: number;

  @Column({ length: 512 })
  name: string;

  @Column({ length: 512 })
  link: string;


  // Relación con autores (documentos locales)
  @ManyToMany(() => Documents, document => document.authors)
  @JoinTable({
    name: 'documents_authors',
    joinColumn: { name: 'author_id', referencedColumnName: 'author_id' },
    inverseJoinColumn: { name: 'document_id', referencedColumnName: 'document_id' }
  })
  documents: Documents[];

  @ManyToMany(() => Labels, label => label.authors)
  @JoinTable({
    name: 'authors_labels',
    joinColumn: { name: 'author_id', referencedColumnName: 'author_id' },
    inverseJoinColumn: { name: 'label_id', referencedColumnName: 'label_id' }
  })
  labels: Labels[];

  @ManyToMany(() => ApaRef, apaRef => apaRef.authors)
  @JoinTable({
    name: 'apa_ref_authors',
    joinColumn: { name: 'author_id', referencedColumnName: 'author_id' },
    inverseJoinColumn: { name: 'apa_ref_id', referencedColumnName: 'apa_ref_id' },
  })
  apaRefs: ApaRef[];

  @ManyToMany(() => Quotes, quote => quote.authors)
  @JoinTable({
    name: 'quotes_authors',
    joinColumn: { name: 'author_id', referencedColumnName: 'author_id' },
    inverseJoinColumn: { name: 'quotes_id', referencedColumnName: 'quotes_id' },
  })
  quotes: Quotes[]



}
