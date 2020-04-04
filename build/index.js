'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

router.get('/hello', (req, res) => {
  res.send('hello test 04 build index actual');
  });

  router.get('/hello2', (req, res) => {
    res.send('hello2');
    });
  app.us

app.use(bodyParser.json());
app.use('/.netlify/functions/index', router);  // path must route to lambda


module.exports = app;
module.exports.handler = serverless(app);

exports.handler