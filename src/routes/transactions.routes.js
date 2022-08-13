const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.get('/', transactionController.index);
router.post('/', transactionController.create);
router.put('/'. transactionController.update);

module.exports = router;
