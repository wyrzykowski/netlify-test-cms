'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

router.get('/', (req, res) => res.send({ test: 'hello'}));

router.get('/another', (req, res) => res.send({ route: 'hello2' }));

app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
