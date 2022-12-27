/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      tax: Sequelize.STRING(255),
      tariff: Sequelize.STRING(255),
      adValorem: {
        type: Sequelize.STRING(255),
        field: 'ad_valorem',
      },
      float: Sequelize.STRING(255),
      iof: Sequelize.STRING(255),
      expiresIn: {
        type: Sequelize.DATE,
        field: 'expires_in',
      },
      paymentStatusSponsor: {
        type: Sequelize.TINYINT(1),
        field: 'payment_status_sponsor',
      },
      paymentStatusProvider: {
        type: Sequelize.TINYINT(1),
        field: 'payment_status_provider',
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      },
      orderId: {
        type: Sequelize.INTEGER,
        field: 'order_id',
        allowNull: false,
        references: {
          model: 'orders',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        field: 'sponsor_id',
        allowNull: false,
        references: {
          model: 'sponsors',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('offers');
  },
};
