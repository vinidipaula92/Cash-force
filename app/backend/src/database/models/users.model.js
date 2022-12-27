const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING(255),
  email: DataTypes.STRING(255),
  phoneNumber: DataTypes.STRING(255),
  mobile: DataTypes.STRING(255),
  departament: DataTypes.STRING(255),
  verificationCode: DataTypes.STRING(255),
  emailChecked: DataTypes.TINYINT(1),
  cashforceAdm: DataTypes.TINYINT(1),
};

module.exports = (sequelize) => {
  const model = sequelize.define('user', attributes, {
    tableName: 'users',
    timestamps: true,
  });
  return model;
};