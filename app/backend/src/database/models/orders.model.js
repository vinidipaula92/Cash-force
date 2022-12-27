const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  orderNfId: DataTypes.STRING(255),
  orderNumber: DataTypes.STRING(255),
  orderPath: DataTypes.STRING(255),
  orderFileName: DataTypes.STRING(255),
  orderOriginalName: DataTypes.STRING(255),
  emissionDate: DataTypes.STRING(255),
  pdfFile: DataTypes.STRING(255),
  emitedTo: DataTypes.STRING(255),
  nNf: DataTypes.STRING(255),
  CTE: DataTypes.STRING(255),
  value: DataTypes.STRING(255),
  cnpjId: DataTypes.INTEGER,
  userId: DataTypes.INTEGER,
  buyerId: DataTypes.INTEGER,
  providerId: DataTypes.INTEGER,
  orderStatusBuyer: DataTypes.STRING(255),
  orderStatusProvider: DataTypes.STRING(255),
  deliveryReceipt: DataTypes.STRING(255),
  cargoPackingList: DataTypes.STRING(255),
  deliveryCtrc: DataTypes.STRING(255),
};

module.exports = (sequelize) => {
  const model = sequelize.define('order', attributes, {
    tableName: 'orders',
    timestamps: true,
  });

  model.associate = (models) => {
    model.belongsTo(models.user, {
      foreignKey: 'userId',
      as: 'userName',
    });
    model.belongsTo(models.buyer, {
      foreignKey: 'buyerId',
      as: 'buyerName',
    });
    model.belongsTo(models.provider, {
      foreignKey: 'providerId',
      as: 'providerName',
    });
    model.belongsTo(models.cnpj, {
      foreignKey: 'cnpjId',
      as: 'cnpjName',
    });
  };
  return model;
};