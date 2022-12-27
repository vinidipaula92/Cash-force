const { Router } = require('express');
const receiptController = require('../controllers/receipt.controller');

const router = Router();

router.get('/:orderNumber', receiptController.getReceipt);

module.exports = router;