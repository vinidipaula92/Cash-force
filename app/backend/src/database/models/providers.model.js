const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING(255),
  tradingName: DataTypes.STRING(255),
  cashforceTax: DataTypes.STRING(255),
  responsibleName: DataTypes.STRING(255),
  responsibleEmail: DataTypes.STRING(255),
  responsiblePosition: DataTypes.STRING(255),
  responsiblePhone: DataTypes.STRING(255),
  responsibleMobile: DataTypes.STRING(255),
  website: DataTypes.STRING(255),
  postalCode: DataTypes.STRING(255),
  address: DataTypes.STRING(255),
  number: DataTypes.STRING(255),
  complement: DataTypes.STRING(255),
  neighborhood: DataTypes.STRING(255),
  city: DataTypes.STRING(255),
  state: DataTypes.STRING(255),
  bank: DataTypes.STRING(255),
  bankAgency: DataTypes.STRING(255),
  account: DataTypes.STRING(255),
  documents: DataTypes.STRING(255),
  phoneNumber: DataTypes.STRING(255),
  situation: DataTypes.STRING(255),
  situationDate: DataTypes.STRING(255),
  cnpjId: DataTypes.INTEGER,
  email: DataTypes.STRING(255),
};

module.exports = (sequelize) => {
  const model = sequelize.define('provider', attributes, {
    tableName: 'providers',
    timestamps: true,
  });

  model.associate = (models) => {
    model.belongsTo(models.cnpj, {
      foreignKey: 'cnpjId',
      as: 'cnpjProvider',
    });
    model.hasMany(models.offer, {
      foreignKey: 'providerId',
      as: 'offersProvider',
    });
  };
  return model;
};