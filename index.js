const express = require('express');
const logger = require('pino');
const path = require('path');

const app = express();

app.set.views(path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index');
});