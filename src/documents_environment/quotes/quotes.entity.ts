
import { Documents } from 'src/documents_environment/documents/documents.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, VersionColumn, DeleteDateColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Quotes {
  @PrimaryGeneratedColumn()
  quotes_id: number;

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
  

  
  @ManyToOne((type) => Documents, (document) => document.quotes)
  documents: Documents[];
  
}
