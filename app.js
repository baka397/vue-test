//加载依赖
var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));

app.use(express.static(path.join(__dirname, 'public')));

//路由设置
app.get('*',function(req,res){
    res.render('index',{});
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = {status:404};
    next(err);
});

// error handlers

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    console.log(err);
    if(!err.status){
        err.status=500;
    }
    switch(err.status){
        case 403:
        err.message = '没有权限访问';
        break;
        case 404:
        err.message = '找不到这个页面';
        break;
        case 500:
        err.message='系统出错了';
        break;
    }
    res.status(err.status);
    res.render('error', {
        title: '出错拉',
        error:err
    });
});

module.exports = app;
