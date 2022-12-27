const receiptService = require('../services/receipt.service');

const receiptController = {
  async getReceipt(req, res) {
    // const { orderNumber } = req.params;
    const receipt = await receiptService.getReceipt();
    res.status(200).json(receipt);
  },
};

module.exports = receiptController;