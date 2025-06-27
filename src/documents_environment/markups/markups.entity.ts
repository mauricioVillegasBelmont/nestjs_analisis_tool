
import { Documents } from 'src/documents_environment/documents/documents.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, VersionColumn } from 'typeorm';

@Entity()
export class Markups {
  @PrimaryGeneratedColumn()
  markups_id: number;

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
  documents: Documents[];
}
