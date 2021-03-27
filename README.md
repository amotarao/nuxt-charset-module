# nuxt-charset-module

inject `<meta charset>` to first of `<head>`.


## Why

[https://web.dev/charset/](https://web.dev/charset/)
> A `<meta charset>` element in the `<head>` of the document that is completely contained in the first 1024 bytes of the document


## Setup

### Install

```bash
npm install --save-dev nuxt-charset-module
# OR
yarn add nuxt-charset-module
```

### Remove current charset

```patch
 // nuxt.config.js
 
 export default {
   head: {
     meta: [
-      { charset: 'utf-8' },
     ],
   },
 };
```


### Load Module

```js
// nuxt.config.js

export default {
  modules: [
    // 'other-module',
    // 'other-module',
    'nuxt-charset-module', // <- Insert to LAST!
  ],
};
```


### Add Options

```js
// nuxt.config.js

export default {
  modules: [
    'nuxt-charset-module',
  ],
  charset: { // If you use 'utf-8', you can remove this.
    charset: 'utf-8', // default
  },
};
```
