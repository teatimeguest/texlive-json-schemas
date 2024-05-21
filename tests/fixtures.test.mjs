import Ajv from 'ajv';
import { expect, test } from 'vitest';

import tlbackup from 'texlive-json-schemas/tlbackup.schema.json';
import tloption from 'texlive-json-schemas/tloption.schema.json';
import tlpaper from 'texlive-json-schemas/tlpaper.schema.json';
import tlpdb from 'texlive-json-schemas/tlpdb.schema.json';
import tlpobjInfo from 'texlive-json-schemas/tlpobj-info.schema.json';

const ajv = new Ajv({ allErrors: true, removeAdditional: 'all', strict: true });

test('tlbackup.schema.json', async () => {
  const json = require('./fixtures/tlbackup.json');
  const original = structuredClone(json);
  ajv.validate(tlbackup, json);
  expect(ajv.errors).toBeNull();
  expect(json).toEqual(original);
});

test('tloption.schema.json', () => {
  const json = require('./fixtures/tloptions.json');
  const original = structuredClone(json);
  ajv.validate({ type: 'array', items: tloption }, json);
  expect(ajv.errors).toBeNull();
  expect(json).toEqual(original);
});

test('tlpaper.schema.json', () => {
  const json = require('./fixtures/tlpaper.json');
  const original = structuredClone(json);
  ajv.validate(tlpaper, json);
  expect(ajv.errors).toBeNull();
  expect(json).toEqual(original);
});

test('tlpdb.schema.json', () => {
  const json = require('./fixtures/tlpdb.json');
  const original = structuredClone(json);
  ajv.validate(tlpdb, json);
  expect(ajv.errors).toBeNull();
  expect(json).toEqual(original);
});

test('tlobj-info.schema.json', () => {
  const json = require('./fixtures/tlpobj-infos.json');
  const original = structuredClone(json);
  ajv.validate({ type: 'array', items: tlpobjInfo }, json);
  expect(ajv.errors).toBeNull();
  expect(json).toEqual(original);
});
