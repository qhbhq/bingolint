# bingolint

A collection of configuration files containing prettier, eslint, stylelint

## Install

#### NPM

```bash
npm install bingolint -D
```

#### Yarn

```bash
yarn add bingolint --dev
```

## Usage

### .prettierrc.js

```js
const { prettier } = require('bingolint')

module.exports = {
  ...prettier,

  // your rules
}
```

### .eslintrc.js

```js
// TODO
```

### .stylelintrc.js

```js
const { stylelint } = require('bingolint')

module.exports = {
  ...stylelint,

  rules: {
    // your rules
  },
}
```
