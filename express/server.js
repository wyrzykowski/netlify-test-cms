'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();


const router = new express.Router();

router.get('/another', (req, res) => res.send({ route: 'hello' }));

app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
