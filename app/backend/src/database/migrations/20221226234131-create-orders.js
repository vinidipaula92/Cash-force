/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      orderNfId: {
        type: Sequelize.STRING(255),
        field: 'order_nf_id',
      },
      orderNumber: {
        type: Sequelize.INTEGER,
        field: 'order_number',
      },
      orderPath: {
        type: Sequelize.STRING(255),
        field: 'order_path',
      },
      orderFileName: {
        type: Sequelize.STRING(255),
        field: 'order_file_name',
      },
      orderOriginalName: {
        type: Sequelize.STRING(255),
        field: 'order_original_name',
      },
      emissionDate: {
        type: Sequelize.STRING(255),
        field: 'emission_date',
      },
      pdfFile: {
        type: Sequelize.STRING(255),
        field: 'pdf_file',
      },
      emitedTo: {
        type: Sequelize.STRING(255),
        field: 'emited_to',
      },
      nNf: {
        type: Sequelize.STRING(255),
        field: 'n_nf',
      },
      CTE: {
        type: Sequelize.STRING(255),
        field: 'cte',
      },
      value: Sequelize.STRING(255),
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
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      buyerId: {
        type: Sequelize.INTEGER,
        field: 'buyer_id',
        allowNull: false,
        references: {
          model: 'buyers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      providerId: {
        type: Sequelize.INTEGER,
        field: 'provider_id',
        allowNull: false,
        references: {
          model: 'providers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      orderStatusBuyer: {
        type: Sequelize.STRING(255),
        field: 'order_status_buyer',
      },
      orderStatusProvider: {
        type: Sequelize.STRING(255),
        field: 'order_status_provider',
      },
      deliveryReceipt: {
        type: Sequelize.STRING(255),
        field: 'delivery_receipt',
      },
      cargoPackingList: {
        type: Sequelize.STRING(255),
        field: 'cargo_packing_list',
      },
      deliveryCtrc: {
        type: Sequelize.STRING(255),
        field: 'delivery_ctrc',
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('orders');
  },
};
