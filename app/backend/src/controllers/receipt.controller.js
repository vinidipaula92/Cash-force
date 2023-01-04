const receiptService = require('../services/receipt.service');

const receiptController = {
  getReceipt: async (req, res) => {
    const receipt = await receiptService.getReceipt();
    res.json(receipt);
  },
};

module.exports = receiptController;