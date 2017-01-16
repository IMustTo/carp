const koa = require('koa');
const middleware = require('./middleware')

const app = new koa();

app.use(middleware);

app.use(async function(ctx) {
  console.log(ctx.url);
  // ctx.redirect('/demo/test');
  ctx.body = 'test';
})

module.exports = app;
