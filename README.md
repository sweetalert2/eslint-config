# Oxlint shareable config for the [SweetAlert2](https://github.com/sweetalert2/sweetalert2) JS/TS coding style

[![npm version](https://img.shields.io/npm/v/@sweetalert2/eslint-config.svg)](https://www.npmjs.com/package/@sweetalert2/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/sweetalert2/eslint-config/blob/main/CHANGELOG.md)

> [Oxlint](https://oxc.rs/docs/guide/usage/linter/) shareable config for the [SweetAlert2](https://github.com/sweetalert2/sweetalert2) JS/TS coding style

## Installation

```
$ npm install --save-dev @sweetalert2/eslint-config oxlint
```

## Usage

Once the `@sweetalert2/eslint-config` package is installed, you can use it by specifying `@sweetalert2/eslint-config` in the [`extends`](https://oxc.rs/docs/guide/usage/linter/config-file-reference.html) section of your [oxlint configuration](https://oxc.rs/docs/guide/usage/linter/config-file-reference.html).

```json
{
  "extends": ["@sweetalert2/eslint-config"]
}
```

Then run:

```
npx oxlint
```
