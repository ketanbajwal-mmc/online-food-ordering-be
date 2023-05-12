const path = require('path');
const express = require('express');  //Definition
const helmet = require('helmet');  //Definition
const cookieParser = require('cookie-parser');  //Definition
const bodyParser = require('body-parser');  //Definition
const cors = require('cors');  //Definition

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

const authenticationRouter = require('./routes/authenticationRouter');
const adminLoginRouter = require('./routes/adminloginRouter');

// Start express app
const app = express();

app.enable('trust proxy');

app.set('view engine', 'pug');
app.use(cors());


app.options('*', cors());
app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});


app.get('/', (req, res) => {
  // i can write the code 
  res.send('Hello g welcome')
})

// 3) ROUTES
//app.use('/', viewRouter);

//New Line

//authentication
app.use('/authentication',authenticationRouter);

//adminLogin
app.use('/adminlogin',adminLoginRouter);



app.all('*', (req, res, next) => {
  res.status(404)
//  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//app.use(globalErrorHandler);



module.exports = app;
