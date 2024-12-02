const express = require('express');
const cors = require('cors')
const routes = require('./api/v1/routes.js')

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api/v1', routes);

module.exports = app 
