require('marko/node-require').install();
require('marko/express');

const express = require('express'); // retorna uma função
const app = express(); // chamando a função
const bodyParser = require('body-parser');

app.use('/estatico' , express.static('src/app/Public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

const rotas = require('../app/Routes/rotas');
rotas(app);

module.exports = app;
