const express = require('express');
const server = express();

const port = process.env.PORT || 7000;

server.get('/', (req, res, next) => {
  res.json({ status: 'ok', message: 'Hello World' });
});

server.listen(port, () => console.log('Server listening...'));
