const express = require('express');
const path = require('path');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(
  '/apiDocs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

module.exports = app;
