/**
 * Created by zeru on 14-10-24.
 */
var mongoose = require('./db');
var models = require('./models');

var ArticleSchema = models.Article;
function Article(){}
module.exports = Article;

Article.add = function(article,callback){
    var date = new Date();
    var month = parseInt(date.getMonth())+1;
    var newArticle = ArticleSchema({
        title:article.title,
        content:article.content,
        date:date.getFullYear() + "/" +month+"/"+date.getDate()
    });

    newArticle.save(function(err,doc){
        if(err) return callback(err);
        return callback(err,doc);
    })
};

Article.getAll = function(callback){
    ArticleSchema.find(function(err,doc){
        //console.log(doc);
        return callback(err,doc);
    })
};

Article.getArticle = function(id,callback){
    ArticleSchema.findOne({_id:id},function(err,doc){
        if(err) return callback(err);

        if(doc){
            return callback(err,doc);
        }else{
            return callback(err,null);
        }
    })
};