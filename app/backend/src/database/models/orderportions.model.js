const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nDup: DataTypes.STRING(255),
  dVenc: DataTypes.DATE,
  vDup: DataTypes.STRING(255),
  availableToMarket: DataTypes.TINYINT(1),
  orderId: DataTypes.INTEGER,
};

module.exports = (sequelize) => {
  const model = sequelize.define('orderportion', attributes, {
    tableName: 'orderportions',
    timestamps: true,
  });

  model.associate = (models) => {
    model.belongsTo(models.order, {
      foreignKey: 'orderId',
      as: 'order',
    });
  };
  return model;
};