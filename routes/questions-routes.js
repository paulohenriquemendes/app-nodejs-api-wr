'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const questionsRoutes = express.Router();
const controller = require('../controllers/question-controller');

questionsRoutes.get('/questions', controller.get);
questionsRoutes.post('/question', controller.post);
questionsRoutes.put('/question/:id', controller.put);
questionsRoutes.delete('/question/:id', controller.delete);

module.exports = questionsRoutes;
