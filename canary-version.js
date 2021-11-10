#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PACKAGE_FILE = path.resolve(__dirname, '../../package.json');
const pkg = require(PACKAGE_FILE);

if (!process.env.GITHUB_SHA) {
  throw new Error('No GITHUB SHA available.');
}

const sha = process.env.GITHUB_SHA.substring(0, 8);
const version = `${pkg.version}-canary.${sha}`;

console.log('Updating version to %s', version);

pkg.version = version;

fs.writeFileSync(
  PACKAGE_FILE,
  JSON.stringify(pkg, null, 2)
);
