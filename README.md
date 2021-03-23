# nuxt-charset-module

inject `<meta charset="utf-8"/>` to first in `<head>`


## Setup

### Install

```bash
npm install --save-dev nuxt-charset-module
# OR
yarn add nuxt-charset-module
```


### Load Module

```js
// nuxt.config.js
export default {
  modules: [
    'nuxt-charset-module',
  ],
};
```


### Add Options

```js
export default {
  modules: [
    'nuxt-charset-module',
  ],
  charset: { // If you use 'utf-8', you can remove this.
    charset: 'utf-8', // default
  },
};
```
