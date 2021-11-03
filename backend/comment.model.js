const mongoose = require('mongoose');

var Comment = new mongoose.Schema({
    id:{
        type:String,
    },
    user_id:{
        type:String,
    },
    desc:{
        type:String,
    }

});

module.exports = mongoose.model('Comment', Comment);