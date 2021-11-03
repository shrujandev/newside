const mongoose = require('mongoose');

var Bookmark = new mongoose.Schema({
    id:{
        type:String,
    },
    user_id:{
        type:String,
    },
    article_id:{
        type:String,
    }

});

module.exports = mongoose.model('Bookmark', Bookmark);