'use strict';
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1> dasdqasds Hello from Express.js test2!</h1>');
  res.end();
});
router.get('/another', (req, res) => res.send('Hello');
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);

