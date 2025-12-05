"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmEntities = typeOrmEntities;
exports.typeOrmProviders = typeOrmProviders;
exports.typeOrmGenerator = typeOrmGenerator;
const path = require("path");
const schematics_1 = require("@angular-devkit/schematics");
const schema_json_1 = __importDefault(require("./schema.json"));
console.log(schema_json_1.default);
function capitalize(s) {
    return String(s[0]).toUpperCase() + String(s).slice(1);
}
function typeOrmEntities(options) {
    return (tree, _context) => {
        const { name } = options;
        tree.create(`src/${name}/test/${name}.entity.ts`, `
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
function typeOrmProviders(options) {
    return (tree, _context) => {
        const { name } = options;
        tree.create(`src/${name}/test/${name}.providers.ts`, `
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
function typeOrmGenerator(options) {
    return (0, schematics_1.chain)([
        typeOrmEntities(options),
        typeOrmProviders(options)
    ]);
}
//# sourceMappingURL=index.js.map