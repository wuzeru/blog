var express = require('express');
var router = express.Router();

var article = require('../module/articleModel');

/* GET home page. */
router.get('/', function(req, res) {
  article.getAll(function(err,doc){
      res.render('index',{articles:doc});
  });
});

router.get('/article/:id',function(req,res){
    var id = req.param('id');
    article.getArticle(id,function(err,doc){
        if(err) throw err;

        if(doc){
            res.render('articleShow',{article:doc});
        }else{
            res.render('articleShow',{article:null});
        }
    })
})

module.exports = router;
