const express = require('express');
const transactionRouter = express.Router();

transactionRouter.get('/', function (request, response) {
    return response.json({ ok: 'ok' });
});

module.exports = transactionRouter;
