/* eslint-disable max-lines-per-function */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line react-func/max-lines-per-function
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
        field: 'phone_number',
      },
      mobile: Sequelize.STRING(255),
      departament: Sequelize.STRING(255),
      verificationCode: {
        type: Sequelize.STRING(255),
        field: 'verification_code',
      },
      emailChecked: {
        type: Sequelize.TINYINT(1),
        field: 'email_checked',
      },
      cashforceAdm: {
        type: Sequelize.TINYINT(1),
        field: 'cashforce_adm',
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  },
};
