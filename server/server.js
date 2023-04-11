const express = require('express');
const path = require('path');
// const db = require('../db/index');

function setupServer () {
  const app = express();

  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, '../client/build')))

  // Add endpoints here

  app.get('/api/hello', (req, res) => {
    res.send('world');
  });

  return app;
}

module.exports = setupServer;