// const { sequelize } = require('../database/models');
const models = require('../database/models');

const receiptService = {
  // eslint-disable-next-line max-lines-per-function
  getReceipt: async (orderNumber) => { 
    const receipt = await models.order.findOne({
      where: { orderNumber },
      attributes: ['orderNumber', 'orderStatusBuyer', 'value', 'createdAt'],
      include: [
        {
          model: models.provider,
          as: 'providerName',
          attributes: ['name'],
        },
        {
          model: models.buyer,
          as: 'buyerName',
          attributes: ['name'],
        },
      ],
    });
    return receipt;
  },
};

module.exports = receiptService;