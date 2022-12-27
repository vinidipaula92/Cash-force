/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orderportions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nDup: {
        type: Sequelize.STRING(255),
        field: 'n_dup',
      },
      dVenc: {
        type: Sequelize.STRING(255),
        field: 'd_venc',
      },
      vDup: {
        type: Sequelize.STRING(255),
        field: 'v_dup',
      },
      availableToMarket: {
        type: Sequelize.TINYINT(1),
        field: 'available_to_market',
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
        allowNull: false,
        field: 'order_id',
        references: {
          model: 'orders',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('orderportions');
  },
};
