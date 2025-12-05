"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const collection_json_1 = __importDefault(require("./collection.json"));
console.log(collection_json_1.default);
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
};
//# sourceMappingURL=index.js.map