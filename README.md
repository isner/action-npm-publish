# GitHub Action - NPM Publish

A composite GitHub action used to publish an npm package to a specified registry.

## Example Usage

```yml
name: Publish

on:
  push:
    branches:
      - master

jobs:
  publish_package:
    runs-on: ubuntu-latest
    steps:
      - uses: isner/action-npm-publish@master
        with:
          email: user@organization.com
          token: ${{ secrets.REGISTRY_TOKEN }}
          scope: '@owner'
          url: https://npm.pkg.github.com
```

## Configuration

- **scope** (required) - Scope name for the package
- **url** (required) - URL of the target registry
- **email** (required) - Email address used to authenticate with the target registry
- **token** (required) - Token used to authenticate with the target registry
- **canary** (optional, default: `false`) - Package should be published as a canary release
