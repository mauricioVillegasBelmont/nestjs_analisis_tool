
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, VersionColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Labels {
  @PrimaryGeneratedColumn()
  labels_id: number;
  
  @Column({ length: 512 })
  name: string;

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

  @OneToMany(() => LabelsReferences, (ref) => ref.label)
  references: LabelsReferences[];
}

@Entity('labels_references')
export class LabelsReferences {
  @PrimaryGeneratedColumn()
  LabelReferenceId: number;

  @ManyToOne(() => Labels, (label) => label.references)
  @JoinColumn({ name: 'labels_id' })
  label: Labels;

  @Column()
  referenceId: number;

  @Column({ type: 'enum', enum: ['documents', 'quotes', 'markups', 'external_assets'] })
  referenceType: 'documents' | 'quotes' | 'markups' | 'external_assets';
}


/**
 * 
 * referenceType: 'documents' | 'quotes' | 'markups' | 'external_assets';
 * 
  const documentId = 123;
  const labels = await dataSource.getRepository(LabelReference)
  .createQueryBuilder('ref')
  .leftJoinAndSelect('ref.label', 'label')
  .where('ref.referenceType = :type AND ref.referenceId = :id', {
    type: 'documents',
    id: documentId,
  })
  .getMany();
 * 
 */