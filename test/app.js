var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var classRouter = require('./routes/class');
var getDataRouter = require('./routes/getData');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/class', classRouter);
app.use('/getData',getDataRouter);



// 创建编码解析-/body-parser  要使用npm 安装
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// 允许所有的请求形式
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

var path = require('path');

global.__base = __dirname + path.sep

// 全局函数
global.global_url = require('./conf/global_url.js')





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// app.listen(app.get('port'),function(){
// 	console.log('express started in '+app.get('env')+' mode on http://localhost:'+app.get('port')+'; press Ctrl-C to terminate');
// })    //app模式
