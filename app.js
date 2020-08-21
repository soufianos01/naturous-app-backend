const path = require('path');
const express = require('express');
const morgan = require('morgan');

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");
const viewRouter = require("./routes/viewRoutes");

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());

// ROUTES
app.use('/', viewRouter)
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;