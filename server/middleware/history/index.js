'use strict';

const url = require('url');

/**
 * ['/demo']
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
module.exports = function historyApiFallback(options = []) {
  return async function(ctx, next) {
    const headers = ctx.headers;
    const { path } = url.parse(ctx.url);
    const redirect = getPrePath(path, options);

    if (redirect &&
      ctx.method === 'GET' &&
      (headers && typeof headers.accept === 'string') &&
      headers.accept.indexOf('application/json') !== 0) {
      ctx.url = redirect;
    }

    await next();
  };
};

function acceptsHtml(header) {
  const htmlAcceptHeaders = ['text/html', '*/*'];
  for (let i = 0; i < htmlAcceptHeaders.length; i++) {
    if (header.indexOf(htmlAcceptHeaders[i]) !== -1) {
      return true;
    }
  }
  return false;
}

function getPrePath(path, options) {
  for (let i = 0; i < options.length; i++) {
    if (path.indexOf(options[i]) === 0) {
      return options[i];
    }
  }
  return false;
}