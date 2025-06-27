
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, VersionColumn, ManyToOne } from 'typeorm';
import { Documents } from 'src/documents_environment/documents/documents.entity';

@Entity()
export class External_assets {
  @PrimaryGeneratedColumn()
  external_assets_id: number;

  @Column({ length: 512 })
  type: string;

  @Column({ length: 512 })
  url: string;

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
