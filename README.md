<h1 style="text-align: center">Welcome to compare-patterns 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/compare-patterns" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/compare-patterns.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> module that compare two patterns

### 🏠 [Homepage](https://github.com/0x0a0d/compare-patterns)

## Install

```sh
npm install compare-patterns
```

## Run tests

```sh
npm install -D
npm run test
```

## Usage

```sh
const comparePatterns = require('compare-patterns');
comparePatterns('a.**.b', 'a.1.2.3.4.5.6.b'); // true
comparePatterns('a.*.b', 'a.1.b'); // true
comparePatterns('a.?.b', 'a.x.b'); // true
```

## Description

+ pattern split by '.'
+ ** means everything (it equals /.*/ in regex)
+ \* means everything except '.' (dot) (it equals /[^.]*/ in regex)
+ ? means any char (it equals /./ in regex)

## Author

👤 **0x0a0d**

* Github: [@0x0a0d](https://github.com/0x0a0d)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/0x0a0d/compare-patterns/issues). You can also take a look at the [contributing guide](https://github.com/0x0a0d/compare-patterns/pulls).

## Show your support

Give a ⭐️ if this project helped you!
