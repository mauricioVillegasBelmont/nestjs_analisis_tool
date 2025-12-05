
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, VersionColumn, JoinColumn, ManyToMany, JoinTable } from 'typeorm';

import { Documents } from 'documents_environment/documents/entities/documents.entity';
import { Labels } from 'documents_environment/labels/entities/labels.entity';

@Entity()
export class Markups {
  @PrimaryGeneratedColumn()
  markup_id: number;

  @Column('text')
  note: string;

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

  @ManyToOne((type) => Documents, (document) => document.markups)
  @JoinColumn({ name: 'document_id' })
  documents: Documents[];


  @ManyToMany(() => Labels, label => label.documents)
  @JoinTable({
    name: 'markups_labels',
    joinColumn: { name: 'markup_id', referencedColumnName: 'markup_id' },
    inverseJoinColumn: { name: 'label_id', referencedColumnName: 'label_id' },
  })
  labels: Labels[];
}
