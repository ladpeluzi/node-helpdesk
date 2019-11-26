require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/'));
console.log(__dirname);

const rotas = require('../app/rotas/rotas');
rotas(app);



module.exports = app;
