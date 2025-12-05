import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, VersionColumn } from 'typeorm';
import { Authors } from 'documents_environment/authors/entities/authors.entity';
import { Quotes } from 'documents_environment/quotes/entities/quotes.entity';
import { Documents } from 'documents_environment/documents/entities/documents.entity';
import { Labels } from 'documents_environment/labels/entities/labels.entity';
import { External_assets } from 'documents_environment/external_assets/entity/external_assets.entity';

@Entity()
export class ApaRef {
    @PrimaryGeneratedColumn()
    apa_ref_id: number;

    // Campos adicionales para la referencia APA
    @Column({ nullable: true })
    title: string;

    @Column({ nullable: true })
    year: number;

    @Column({ nullable: true })
    publisher: string;

    @Column({ nullable: true })
    doi: string;

    @Column({ nullable: true })
    url: string;

    @Column({ type: 'text', nullable: true })
    abstract: string;

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



    // Relación muchos-a-muchos con Authors
    @ManyToMany(() => Authors, author => author.apaRefs)
    @JoinTable({
        name: 'apa_ref_authors',
        joinColumn: { name: 'apa_ref_id', referencedColumnName: 'apa_ref_id' },
        inverseJoinColumn: { name: 'author_id', referencedColumnName: 'author_id' }
    })
    authors: Authors[];

    // Relación uno-a-muchos con Quotes
    @OneToMany(() => Quotes, quote => quote.apaRef)
    quotes: Quotes[];

    // Relación muchos-a-uno con Document
    @ManyToOne(() => Documents, document => document.apaRefs)
    @JoinColumn({ name: 'document_id' })
    document: Documents;

    // Relación muchos-a-muchos con Labels
    @ManyToMany(() => Labels, label => label.label_id)
    @JoinTable({
        name: 'apa_ref_labels',
        joinColumn: { name: 'apa_ref_id', referencedColumnName: 'apa_ref_id' },
        inverseJoinColumn: { name: 'label_id', referencedColumnName: 'label_id' }
    })
    labels: Labels[];

    // Relación uno-a-uno con ExternalAsset
    @ManyToOne(() => External_assets, externalAsset => externalAsset.external_asset_id)
    @JoinColumn({ name: 'external_asset_id' })
    externalAsset: External_assets;
}