const jsonServer = require('json-server');
const cards = require('./data/db-cards.json');

const db = {
  cards: cards
};

const server = jsonServer.create();
const router = jsonServer.router(db);
const PORT = 3000;
server.use(jsonServer.defaults());
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});