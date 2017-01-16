const http = require('http');

let app = require('../src/app');
let server = http.createServer(app.callback());

server.listen(3000);
console.log('server start at 3000');
