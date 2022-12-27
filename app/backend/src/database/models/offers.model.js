const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tax: DataTypes.STRING(255),
  tariff: DataTypes.STRING(255),
  adValorem: DataTypes.STRING(255),
  float: DataTypes.STRING(255),
  iof: DataTypes.STRING(255),
  expiresIn: DataTypes.DATE,
  paymentStatusSponsor: DataTypes.TINYINT(1),
  paymentStatusProvider: DataTypes.TINYINT(1),
  orderId: DataTypes.INTEGER,
  sponsorId: DataTypes.INTEGER,
};

module.exports = (sequelize) => {
  const model = sequelize.define('offer', attributes, {
    tableName: 'offers',
    timestamps: true,
  });

  model.associate = (models) => {
    model.belongsTo(models.order, {
      foreignKey: 'orderId',
      as: 'order',
    });
    model.belongsTo(models.sponsor, {
      foreignKey: 'sponsorId',
      as: 'sponsor',
    });
  };
  return model;
};