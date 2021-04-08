var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// using mongoose js
var mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/db_firex';

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useCreateIndex: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//===============HBS help s=================
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
var routes = require('./routes/index');
const {HTTP_CODE_404,HTTP_CODE_500} = require("./config/code_message");
// app.use('/', indexRouter);
routes(app)
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
 if( res.status(err.status|| 500).statusCode == 500) {
   res.json({code:500,message:HTTP_CODE_500})
 }else if( res.status(err.status|| 404).statusCode == 404) {
   res.json({code:404, message:HTTP_CODE_404})
 }

  // res.render('error');
});

module.exports = app;
