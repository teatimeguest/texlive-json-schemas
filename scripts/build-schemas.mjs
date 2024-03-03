import fs from 'node:fs/promises';
import path from 'node:path';

import $RefParser from '@apidevtools/json-schema-ref-parser';
import yaml from 'js-yaml';

const getReplacer = ($id) => (key, value) => {
  return key === '$defs' || (key === '$id' && value !== $id)
    ? undefined
    : value;
};

async function buildSchemas(input, outdir = '.') {
  const schemas = yaml.loadAll(await fs.readFile(input, 'utf8'));
  const bundle = async (schema) => {
    return await $RefParser.dereference(schema, {
      resolve: {
        schemas: {
          order: 1,
          canRead: true,
          read: (file) => {
            const base = path.basename(file.url);
            return schemas.find((schema) => schema.$id === base);
          },
        },
      },
    });
  };
  const writeSchema = async (schema) => {
    const bundled = await bundle(schema);
    const output = path.join(outdir, schema.$id);
    const json = JSON.stringify(bundled, getReplacer(bundled.$id), 2);
    await fs.mkdir(path.dirname(output), { recursive: true });
    await fs.writeFile(output, json, 'utf8');
    return bundled;
  };
  return await Promise.all(schemas.map((schema) => writeSchema(schema)));
}

await buildSchemas('src/schemas.yml', 'dist');
