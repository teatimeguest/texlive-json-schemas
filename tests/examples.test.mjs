import Ajv from 'ajv';
import { expect, test } from 'vitest';

import tlbackup from '#/tlbackup.schema.json' with { type: 'json' };
import tloption from '#/tloption.schema.json' with { type: 'json' };
import tlpaper from '#/tlpaper.schema.json' with { type: 'json' };
import tlpdb from '#/tlpdb.schema.json' with { type: 'json' };
import tlpobj from '#/tlpobj.schema.json' with { type: 'json' };
import tlsetting from '#/tlsetting.schema.json' with { type: 'json' };

const ajv = new Ajv({ allErrors: true, strict: true });

test('tlbackup.schema.json#/examples/0', () => {
  ajv.validate(tlbackup, tlbackup.examples[0]);
  expect(ajv.errors).toBeNull();
});

test('tloption.schema.json#/examples/0', () => {
  ajv.validate(tloption, tloption.examples[0]);
  expect(ajv.errors).toBeNull();
});

test('tlpaper.schema.json#/examples/0', () => {
  ajv.validate(tlpaper, tlpaper.examples[0]);
  expect(ajv.errors).toBeNull();
});

test('tlpdb.schema.json#/examples/0', () => {
  ajv.validate(tlpdb, tlpdb.examples[0]);
  expect(ajv.errors).toBeNull();
});

test('tlpobj.schema.json#/examples/0', () => {
  ajv.validate(tlpobj, tlpobj.examples[0]);
  expect(ajv.errors).toBeNull();
});

test('tlsetting.schema.json#/examples/0', () => {
  ajv.validate(tlsetting, tlsetting.examples[0]);
  expect(ajv.errors).toBeNull();
});
