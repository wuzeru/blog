/**
 * Created by zeru on 14-10-23.
 */
var express = require('express');
var router = express.Router();

var user = require('../module/userModel');
var article = require('../module/articleModel');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('admin', { title: 'Express' });
});

router.post('/login',function(req,res){
    var username = req.param('username');
    var password = req.param('password');

    user.get(username,function(err,doc){
        if(err) throw err;

        if(doc != null){
            if(doc.password === password){
                req.session.username = username;
                res.redirect('/admin/adminIndex');
            }else{
                res.end('wrong');
            }
        }else{
            res.end('username!null');
        }
    })
});

router.get('/adminIndex',function(req,res){
    //console.log(req.session.username);
    if(req.session.username){
        res.render('adminIndex');
    }else{
        res.redirect('/admin');
    }
});

router.post('/add',function(req,res){
    var newArticle = {
        title:req.param('title'),
        content:req.param('content')
    };
    article.add(newArticle,function(err,doc){
        if(err) throw err;
        if(doc){
            res.send('ok');
        }
    })
});

module.exports = router;