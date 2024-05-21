import Ajv from 'ajv';
import { expect, test } from 'vitest';

import tlbackup from 'texlive-json-schemas/tlbackup.schema.json';
import tloption from 'texlive-json-schemas/tloption.schema.json';
import tlpaper from 'texlive-json-schemas/tlpaper.schema.json';
import tlpdb from 'texlive-json-schemas/tlpdb.schema.json';
import tlpobj from 'texlive-json-schemas/tlpobj.schema.json';
import tlsetting from 'texlive-json-schemas/tlsetting.schema.json';

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
