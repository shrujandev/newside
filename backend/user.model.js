const mongoose = require('mongoose');

var User = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    id: {
        type: String,
    },
    email: {
        type: String,
    },
    intrests: {
        type: Array,
    },
   location: {
        type: Number,
    },
});

module.exports = mongoose.model('User', User);