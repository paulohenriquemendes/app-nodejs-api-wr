'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const config = require('./config');

// LOADING ROUTES
const questionsRoutes = require('./routes/questions-routes');

// LOADING MODELS
const Question = require('./models/question');

// CONECTION MONGO DB
mongoose.connect(config.CONNECTION_STRING, { useNewUrlParser: true })
  .then(()=>{console.log('CONECTADO AO MONGO DB')})
  .catch((err)=>{console.log('ERRO AO SE CONECTAR AO MONGO-DB', err)});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({
    limit: '5mb'
}));

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/api', questionsRoutes);
module.exports = app;