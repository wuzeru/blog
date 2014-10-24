/**
 * Created by zeru on 14-10-23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _User = new Schema({
    username:String,
    password:String
});

var _Article = new Schema({
    title:String,
    content:String,
    date:String
});

exports.User = mongoose.model('users',_User);
exports.Article = mongoose.model('articles',_Article);