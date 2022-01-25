const fs = require('fs').promises;
const path = require('path');

module.exports = function (moduleOptions) {
  moduleOptions = {
    ...this.options.charset,
    ...moduleOptions,
  };

  const options = {
    charset: 'utf-8',
    ...moduleOptions,
  };

  const replace = (html) => {
    html.replace(/(<head[\s\S]*?>)/, `$1<meta charset="${options.charset}"/>`);
  };

  this.nuxt.hook('render:route', (url, result, context) => {
    result.html = replace(result.html);
  });

  this.nuxt.hook('generate:page', (page) => {
    page.html = replace(page.html);
  });

  /**
   * fallback ページへの追加
   *
   * 参考: https://github.com/nuxt/nuxt.js/blob/2ec62617ced873fef97c73a6d7aa1271911ccfd5/packages/generator/src/generator.js
   */
  this.nuxt.hook('generate:done', async (generator) => {
    const { fallback } = generator.options.generate;
    if (typeof fallback !== 'string' || !fallback) {
      return;
    }

    const fallbackPath = path.join(generator.distPath, fallback);
    const exists = (await fs.stat(fallbackPath)).isFile();
    if (!exists) {
      return;
    }
    const originalHtml = await fs.readFile(fallbackPath, 'utf-8');
    const html = replace(originalHtml);
    await fs.writeFile(fallbackPath, html);
  });
};

module.exports.meta = require('../package.json');
