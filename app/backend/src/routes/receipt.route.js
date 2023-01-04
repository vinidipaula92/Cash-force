const { Router } = require('express');
const receiptController = require('../controllers/receipt.controller');

const router = Router();

router.get('/', receiptController.getReceipt);

module.exports = router;