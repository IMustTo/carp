const router = require('koa-router')();

module.exports = async function(ctx, next) {

  await next();
};
