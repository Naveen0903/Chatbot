const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

var TagSchema = new Schema({
    q: {type: String, required: true},
    a: { type: String, required:true},
    tags: []
});

var MessagesSchema = new Schema({
    messages: [{}]
});

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
};

const MONGOURI = 'mongodb://localhost:27017/Chatbot'

module.exports = {
    TAGSCHEMA: mongoose.model('tags', TagSchema),
    MESSAGESCHEMA: mongoose.model('session', MessagesSchema),
    OPTIONS: options,
    MONGOURI: MONGOURI
};