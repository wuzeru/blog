/**
 * Created by zeru on 14-10-23.
 */
var db = require('./db');
var models = require('./models');
var UserModel = models.User;

function User(){}
module.exports = User;


User.get = function(username,callback){
    UserModel.findOne({username:username},function(err,doc){
        if(err) return callback(err);

        console.log(doc);
        if(doc != ''){
            return callback(err,doc);
        }
        else{
            return callback(err,null);
        }
    })
};
