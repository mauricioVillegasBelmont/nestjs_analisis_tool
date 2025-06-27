// schematics cli/schematics:typeOrmGenerator --name my-custom-resource
// nest g type-orm-generator nombre --collection=nestjs-schematics
const path = require("path");
import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';

function capitalize(s:string):string{
  return String(s[0]).toUpperCase() + String(s).slice(1);
}

export function typeOrmEntities(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const { name } = options;
    tree.create(
      `src/${name}/${name}.entity.ts`,
      `
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class ${capitalize(name)} {
  @PrimaryGeneratedColumn()
  ${name}_id: number;
}
`
    );
    return tree;
  }
}

export function typeOrmProviders(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
      // Generate files based on options (e.g., name, etc.)
    const { name } = options;
    tree.create(
      `src/${name}/${name}.providers.ts`,
      `
import { DataSource } from 'typeorm';
import { ${capitalize(name)} } from './${name}.entity';

export const ${name}Providers = [
  {
    provide: '${name.toUpperCase()}_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(${capitalize(name)}),
    inject: ['DATA_SOURCE'],
  },
];
`
    );
    return tree;
  };
}

export function typeOrmGenerator(options: any): Rule {
  return chain([
    typeOrmEntities(options),
    typeOrmProviders(options)
  ]);
}
