// const { sequelize } = require('../database/models');
const models = require('../database/models');

const receiptService = {
  async getReceipt() {
    const receipt = await models.cnpj.findAll();
    return receipt;
  },
};

module.exports = receiptService;