const mongoose = require('mongoose');

var Article = new mongoose.Schema({
    author: {
        type: String,
    },
    title: {
        type: String,
    },
    id: {
        type: String,
    },
   section: {
        type: String,
    },
    slug: {
        type: Array,
    },
   url: {
        type: Number,
    },
    thumbnail: {
        type: Image,
    },
});

module.exports = mongoose.model('Article', Article);