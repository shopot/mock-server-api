// JSON Server module
const jsonServer = require('json-server');
const catalog = require('./db/catalog.json');

const PORT = 3000;

const db = {
  catalog: catalog
};

const server = jsonServer.create();
const router = jsonServer.router(db);
server.use(jsonServer.defaults());

// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);

server.use(router);

server.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

// Export the Server API
module.exports = server;