const express = require('express');

const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());
app.use('/', indexRouter);

app.listen(3333, () => console.log('ok'));

module.exports = app;