'use strict';

const Question = require('../models/question');
let model = new Question;

exports.post = ((req, res) => {
    console.log(req.body.name);
    model.name = req.body.name;
    model.body = req.body.body;
    model.save().then(() => console.log('OK'));
});

exports.get = ((req, res) => {
    Question.find(function(err, row){
      if(err){
          res.send(err);
        }
        res.json(row);
      });
});

exports.put = ((req, res) => {
    Question.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            body: req.body.body
          }
    }).then(() => console.log('OK'))
});

exports.delete = ((req, res) => {
    Question.remove({_id: req.params.id}, function(err, row){
      if(err){
          res.send(err);
        }
          res.json({message: 'Questão Cadastrada com sucesso!'});
        });
});
