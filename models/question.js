var mongoose = require('mongoose');
Schema = mongoose.Schema;

//criando model
var Question = new Schema({
    name: {type: String, required: true, trim: true},
    body: {type: String, required: true, trim: true},
})

module.exports = mongoose.model('Question', Question)
