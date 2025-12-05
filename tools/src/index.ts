import collection from './collection.json'
console.log(collection)
const _collection = {
  "$schema": "../../node_modules/@angular-devkit/schematics/collection-schema.json",
  "schematics": {
    "entities": {
      "description": "Genera un archivo .entity.ts y .providers.ts con TypeORM",
      "factory": "./typeOrmGenerator/index#typeOrmGenerator",
      "schema": "./typeOrmGenerator/schema.json",
      "aliases": ["orm-entities", "typeorm-entities"]
    }
  }
}