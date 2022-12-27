/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line max-lines-per-function, react-func/max-lines-per-function
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('providers', {
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
      tradingName: {
        type: Sequelize.STRING(255),
        field: 'trading_name',
      },
      cashforceTax: {
        type: Sequelize.STRING(255),
        field: 'cashforce_tax',
      },
      responsibleName: {
        type: Sequelize.STRING(255),
        field: 'responsible_name',
      },
      responsibleEmail: {
        type: Sequelize.STRING(255),
        field: 'responsible_email',
      },
      responsiblePosition: {
        type: Sequelize.STRING(255),
        field: 'responsible_position',
      },
      responsiblePhone: {
        type: Sequelize.STRING(255),
        field: 'responsible_phone',
      },
      responsibleMobile: {
        type: Sequelize.STRING(255),
        field: 'responsible_mobile',
      },
      website: Sequelize.STRING(255),
      postalCode: {
        type: Sequelize.STRING(255),
        field: 'postal_code',
      },
      address: Sequelize.STRING(255),
      number: Sequelize.STRING(255),
      complement: Sequelize.STRING(255),
      neighborhood: Sequelize.STRING(255),
      city: Sequelize.STRING(255),
      state: Sequelize.STRING(255),
      bank: Sequelize.STRING(255),
      bankAgency: {
        type: Sequelize.STRING(255),
        field: 'bank_agency',
      },
      account: Sequelize.STRING(255),
      documents: Sequelize.STRING(255),
      phoneNumber: {
        type: Sequelize.STRING(255),
        field: 'phone_number',
      },
      situation: Sequelize.STRING(255),
      situationDate: {
        type: Sequelize.STRING(255),
        field: 'situation_date',
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        field: 'cnpj_id',
        allowNull: false,
        references: {
          model: 'cnpjs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      email: Sequelize.STRING(255),
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('providers');
  },
};
