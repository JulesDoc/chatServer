/* eslint-disable linebreak-style */
const http = require('http');
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const HomeRoutes = require('C:/Users/calvo/Desktop/WebTraining/7 - ChatServer/chat-server-exercise/routes/homeRouter.js');

const app = new koa();
app.use(bodyParser()); //register this with your koa application

app.use(HomeRoutes.routes())
  .use(HomeRoutes.allowedMethods());

app.use(ctx => { 
  ctx.body = 'Hello world';
});

app.listen(3000);
console.log('Running!!');

/* const hostname = '127.0.0.1';
const db = {msgs: []};
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Expected here; serve static files from public dir
const staticDirPath = path.join('client');

// Mount the middleware
server.use(serve(staticDirPath));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */