import Ajv, { type JSONSchemaType } from 'ajv';
// import type { JTDDataType } from 'ajv/dist/jtd';
import { assert, expectTypeOf, test } from 'vitest';

import tlpdb from 'texlive-json-schemas/tlpdb.schema.json';
import type { TLPDB } from 'texlive-json-schemas/types';

const ajv = new Ajv();

test('TLPDB with JSONSchemaType', () => {
  const json = tlpdb.examples[0] as unknown;
  const schema = tlpdb as unknown as JSONSchemaType<TLPDB>;
  assert(ajv.validate(schema, json));
  expectTypeOf(json).toEqualTypeOf<TLPDB>();
});

// https://github.com/microsoft/TypeScript/issues/32063
//
// test('TLPDB with JTDDataType', () => {
//   const json = tlpdb.examples[0] as unknown;
//   assert(ajv.validate<JTDDataType<typeof tlpdb>>(tlpdb, json));
//   expectTypeOf(json).toEqualTypeOf<TLPDB>();
// });
