const koa = require('koa');

const app = new koa();

app.use(async function(ctx, next) {

  await next();
  ctx.body = '53s';
});

app.use(ctx => {
  ctx.url = 'http://127.0.0.1:3000';
  ctx.body = 'Hello Koa';
});

module.exports = app;
