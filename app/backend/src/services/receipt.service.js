/* eslint-disable complexity */
const moment = require('moment');
const models = require('../database/models');

const receiptService = {
  // eslint-disable-next-line max-lines-per-function
  getReceipt: async () => { 
    const receipt = await models.order.findAll({
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
    // eslint-disable-next-line max-lines-per-function
    const receiptData = receipt.map((item) => {
      const receiptItem = {
        orderNumber: item.orderNumber,
        providerName: item.providerName.name,
        buyerName: item.buyerName.name,
        value: item.value,
        createdAt: moment(item.createdAt).format('DD/MM/YYYY'),
      };
      switch (item.orderStatusBuyer) {
        case '0':
          receiptItem.orderStatusBuyer = 'Pendente de confirmação';
          break;
        case '1':
          receiptItem.orderStatusBuyer = 'Pedido confirmado';
          break;
        case '2':
          receiptItem.orderStatusBuyer = 'Não reconhece o pedido';
          break;
        case '3':
          receiptItem.orderStatusBuyer = 'Mercadoria não recebida';
          break;
        case '4':
          receiptItem.orderStatusBuyer = 'Recebida com avaria';
          break;
        case '5':
          receiptItem.orderStatusBuyer = 'Devolvida';
          break;
        case '6':
          receiptItem.orderStatusBuyer = 'Recebida com devolução parcial';
          break;
        case '7':
          receiptItem.orderStatusBuyer = 'Recebida e confirmada';
          break;
        default:
          receiptItem.orderStatusBuyer = 'Pagamento Autorizado';
      }
      return receiptItem;
    });
    return receiptData;
  },
};

module.exports = receiptService;