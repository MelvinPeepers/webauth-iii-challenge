const express = require('express');

const regRouter = require('../register/reg-router');
const loginRouter = require('../login/login-router.js');
const usersRouter = require('../users/users-router.js');
const db = require('../database/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/register', regRouter);
server.use('/api/login', loginRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send("Up and Running!");
});
  
module.exports = server;