const express = require('express');
const router = require('./routes/router');

const server = express();
const port = process.env.PORT || 7000;

server.use('/quests', router.quests);

server.get('/', (req, res, next) => {
  res.json({ status: 'ok', message: 'Hello World' });
});

server.listen(port, () => console.log('Server listening...'));
