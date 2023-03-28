const jsonServer = require('json-server');
const catalog = require('./data/catalog.json');

const db = {
  catalog: catalog
};

const server = jsonServer.create();

const router = jsonServer.router(db);

const PORT = 3000;

server.use(jsonServer.defaults());

server.use(router);

server.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});