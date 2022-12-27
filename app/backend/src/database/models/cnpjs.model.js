const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  cnpj: DataTypes.STRING,
  companyType: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const model = sequelize.define('cnpj', attributes, {
    tableName: 'cnpjs',
    timestamps: true,
  });

  model.associate = (models) => {
    model.hasMany(models.buyer, {
      foreignKey: 'cnpjId',
      as: 'cnpjBuyers',
    });
    model.hasMany(models.provider, {
      foreignKey: 'cnpjId',
      as: 'cnpjProviders',
    });
    model.hasMany(models.order, {
      foreignKey: 'cnpjId',
      as: 'cnpjOrders',
    });
  };
  return model;
};