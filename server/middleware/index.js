const compose = require('koa-compose');
const compress = require('koa-compress'); // gzip
const body = require('koa-bodyparser');

module.exports = compose([
  compress(),
  body(),
]);
