const receiptService = require('../services/receipt.service');

const receiptController = {
  getReceipt: async (req, res) => {
    const { orderNumber } = req.params;
    const receipt = await receiptService.getReceipt(orderNumber);
    res.json(receipt);
  },
};

module.exports = receiptController;