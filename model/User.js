const {Schema, model} = require('mongoose');

const schema  = new Schema({
    name: {
        type: String,
        required: true
    },
    surnaname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    images: {
        type: String,
        required: true
    }
});

module.exports = model('Users', schema)

