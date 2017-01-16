const compose = require('koa-compose');
const compress = require('koa-compress'); // gzip
const body = require('koa-bodyparser');

const history = require('./history');

module.exports = compose([
  history(['/demo']),
  compress(),
  body(),
]);
