
import { Documents } from 'src/documents_environment/documents/documents.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Authors {
  @PrimaryGeneratedColumn()
  authors_id: number;

  @Column({ length: 512 })
  name: string;

  @Column({ length: 512 })
  link: string;

}
