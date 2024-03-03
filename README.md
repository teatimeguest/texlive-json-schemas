# texlive-json-schemas

> JSON schema files for TeX Live resources

[![npm][npm-badge]](https://www.npmjs.com/package/texlive-json-schemas)

This package provides JSON schema files and TypeScript type definitions
for [TeX Live JSON formats][json-formats],
with [minor modifications][diff] to match the actual output.

## Installation

```sh
npm install texlive-json-schemas
```

## Usage

```typescript
import Ajv from 'ajv';
import tlpdb from 'texlive-json-schemas/tlpdb.schema.json';
import type { TLPDB } from 'texlive-json-schemas/types';

const ajv = new Ajv();
const json: unknown = { ... };

if (ajv.validate<TLPDB>(tlpdb, json)) {
  // typeof json === TLPDB
}
```

## References

- [https://tug.org/svn/texlive/trunk/Master/tlpkg/doc/json-formats.txt][json-formats]

## License

[MIT License](https://github.com/teatimeguest/texlive-json-schemas/blob/main/LICENSE)

[diff]: https://github.com/teatimeguest/texlive-json-schemas/blob/main/docs/json-formats.txt.diff
[json-formats]: https://tug.org/svn/texlive/trunk/Master/tlpkg/doc/json-formats.txt?revision=56458&view=markup
[npm-badge]: https://img.shields.io/npm/v/texlive-json-schemas?logo=npm&logoColor=959da5&labelColor=2e353b&color=c40000
