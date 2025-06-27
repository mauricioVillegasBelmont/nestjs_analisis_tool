"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmGenerator = exports.typeOrmProviders = exports.typeOrmEntities = void 0;
const schematics_1 = require("@angular-devkit/schematics");
function capitalize(s) {
    return String(s[0]).toUpperCase() + String(s).slice(1);
}
function typeOrmEntities(options) {
    return (tree, _context) => {
        const { name } = options;
        tree.create(`src/${name}/${name}.entity.ts`, `
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ${capitalize(name)} {
  @PrimaryGeneratedColumn()
  ${name}_id: number;
}
`);
        return tree;
    };
}
exports.typeOrmEntities = typeOrmEntities;
function typeOrmProviders(options) {
    return (tree, _context) => {
        const { name } = options;
        tree.create(`src/${name}/${name}.providers.ts`, `
import { DataSource } from 'typeorm';
import { ${capitalize(name)} } from './${name}.entity';

export const ${name}Providers = [
  {
    provide: '${name.toUpperCase()}_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(${capitalize(name)}),
    inject: ['DATA_SOURCE'],
  },
];
`);
        return tree;
    };
}
exports.typeOrmProviders = typeOrmProviders;
function typeOrmGenerator(options) {
    return (0, schematics_1.chain)([
        typeOrmEntities(options),
        typeOrmProviders(options)
    ]);
}
exports.typeOrmGenerator = typeOrmGenerator;
