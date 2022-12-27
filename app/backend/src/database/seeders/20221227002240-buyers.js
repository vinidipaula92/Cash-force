/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'buyers',
      [
        {
          name: 'SACADO 001',
          trading_name: 'SACADO 001 LTDA',
          cashforce_tax: '0',
          responsible_name: null,
          responsible_email: null,
          responsible_position: null,
          responsible_phone: null,
          responsible_mobile: null,
          website: null,
          postal_code: null,
          address: null,
          number: null,
          complement: null,
          neighborhood: null,
          city: null,
          state: null,
          phone_number: null,
          situation: null,
          situation_date: null,
          created_at: '2020-10-29 21:20:33',
          updated_at: '2020-10-29 21:20:34',
          cnpj_id: 1,
          confirm: 1,
          email: null,
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('buyers', null, {});
  },
};
