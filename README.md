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

If you use 'utf-8', You don't need to write this.

```js
// nuxt.config.js

export default {
  modules: [
    'nuxt-charset-module',
  ],
  charset: {
    charset: 'utf-8', // default
  },
};

// OR

export default {
  modules: [
    [
      'nuxt-charset-module',
      {
        charset: 'utf-8', // default
      }
    ],
  ],
};
```
