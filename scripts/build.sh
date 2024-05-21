#!/usr/bin/env bash
set -eu

readonly dist=dist

rm -f "${dist}"/*.schema.{d.ts,json}
node scripts/build-schemas.mjs

patch-package
json2ts \
  --no-bannerComment \
  --strictIndexSignatures \
  -i "${dist}/*.json" \
  -o "${dist}"
