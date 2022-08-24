const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactionController');

router.get('/', transactionsController.index);
router.post('/', transactionsController.create);
router.put('/'. transactionsController.update);

module.exports = router;
