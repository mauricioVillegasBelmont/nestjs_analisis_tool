
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, VersionColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';

import { Documents } from 'documents_environment/documents/entities/documents.entity';
import { Labels } from 'documents_environment/labels/entities/labels.entity';

@Entity()
export class External_assets {
  @PrimaryGeneratedColumn()
  external_asset_id: number;

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




  @ManyToOne(() => Documents, (document) => document.external_assets)
  @JoinColumn({ name: 'document_id' })
  document: Documents;

  @ManyToMany(() => Labels, label => label.documents)
  @JoinTable({
    name: 'assets_labels',
    joinColumn: { name: 'external_asset_id', referencedColumnName: 'external_asset_id' },
    inverseJoinColumn: { name: 'label_id', referencedColumnName: 'label_id' },
  })
  labels: Labels[];
}
