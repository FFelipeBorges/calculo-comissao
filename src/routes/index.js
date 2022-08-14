const express = require('express');
const router = express.Router();

const transactionsRouter = require('./transactions.routes');

router.use('/transactions', transactionsRouter);
router.use('/comission', transactionsRouter);

module.exports = router;
