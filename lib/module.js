module.exports = function (moduleOptions) {
  moduleOptions = {
    ...this.options.charset,
    ...moduleOptions,
  };

  const options = {
    charset: 'utf-8',
    ...moduleOptions,
  };

  this.nuxt.hook('render:route', (url, result, context) => {
    result.html = result.html.replace(/(<head[\s\S]*?>)/, `$1<meta charset="${options.charset}"/>`);
  });

  this.nuxt.hook('generate:page', (page) => {
    page.html = page.html.replace(/(<head[\s\S]*?>)/, `$1<meta charset="${options.charset}"/>`);
  });
};

module.exports.meta = require('../package.json');
