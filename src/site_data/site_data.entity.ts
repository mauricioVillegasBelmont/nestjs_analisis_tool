
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, VersionColumn } from 'typeorm';

@Entity()
export class Site_data {
  @PrimaryGeneratedColumn()
  site_data_id: number;

  @Column({ length: 512 })
  name: string;

  @Column('longtext')
  value: string;

  @Column('tinyint',{ default: 0 })
  status: number;

  @CreateDateColumn()
  created: Date;
  
  @UpdateDateColumn()
  updated: Date;

  @DeleteDateColumn()
  deletedDate: Date

  @VersionColumn()
  version: number

}
