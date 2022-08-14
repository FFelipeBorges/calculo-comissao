const express = require('express');

const { routerWithAuth, routerWithoutAuth } = require('./routes');

const app = express();

app.use(express.json());
app.use(routerWithoutAuth, routerWithAuth);

app.listen(3333, () => console.log('ok'));

module.exports = app;