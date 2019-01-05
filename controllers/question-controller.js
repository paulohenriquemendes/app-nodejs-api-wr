'use strict';

const ValidationContract = require('../validators/fluent-validator');
const Question = require('../models/question');

exports.post = ((req, res) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.body, 3, 'O corpo deve conter pelo menos 3 caracteres');

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    console.log(req.body.title);
    let model = new Question;
    model.title = req.body.title;
    model.body = req.body.body;
    model.category = req.body.category;
    model.items = req.body.items;
    model.save().then(() => res.status(201).send(req.body))
                .catch(e => res.status(400).send({message:'ERROR', data: e}));
});

exports.get = ((req, res) => {
    Question
        .find({},'title body items category')
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => res.status(400).send({message:'ERROR', data: e}));
});


exports.getById = ((req, res) => {
    Question
        .findById({
            _id:req.params.id
        })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => res.status(400).send({message:'ERROR', data: e}));
});

exports.getByCategory = ((req, res) => {
    Question
        .find({
            category:req.params.category
        })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => res.status(400).send({message:'ERROR', data: e}));
});

exports.put = ((req, res) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.body, 3, 'O corpo deve conter pelo menos 3 caracteres');

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    
    Question.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.name,
            body: req.body.body
          }
    }).then(() => res.json({message: 'Questão editada com sucesso!'}));
});

exports.delete = ((req, res) => {
    Question
        .remove({_id: req.params.id})
        .then(() => {
            res.status(200).send({message: 'Question deleted'});
        })
        .catch(e => res.status(400).send({message:'ERROR', data: e}));
});
