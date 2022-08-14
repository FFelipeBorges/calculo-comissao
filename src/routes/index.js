const express = require('express');
const router = express.Router();

const transactionsRouter = require('./transactions.routes');
const comissionsRouter = require('./comissions.routes');

router.use('/transactions', transactionsRouter);
router.use('/comission', comissionsRouter);

module.exports = router;
