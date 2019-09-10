const express = require('express');

const db = require('../database/dbConfig.js')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.json({ api: 'up' });
  });
  
module.exports = server;