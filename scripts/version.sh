#!/usr/bin/env bash
set -euo pipefail

# shellcheck disable=SC2154
readonly version="v${npm_package_version}"

git add -u
git commit -m "chore(release): prepare for ${version}"

git cliff \
  --config .config/cliff.toml \
  --unreleased \
  --tag "${version}" |
  git tag "${version}" --cleanup=whitespace -F -

git --no-pager show --color --no-patch "${version}" |
  sed '/^-----BEGIN/,/^-----END/d'
