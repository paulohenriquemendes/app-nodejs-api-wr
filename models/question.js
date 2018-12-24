var mongoose = require('mongoose');
Schema = mongoose.Schema;

//criando model
var Question = new Schema({
    title: {type: String, required: true, trim: true},
    body: {type: String, required: true, trim: true},
    category: {type: String, required: true, trim: true},
    items: [{
        a: {
            type: String,
            // required: true
        },
        b: {
            type: String,
            // required: true
        },
        c: {
            type: String,
            // required: true
        },
        d: {
            type: String,
            // required: true
        },
        e: {
            type: String,
            // required: true
        }
    }],
})

module.exports = mongoose.model('Question', Question)
