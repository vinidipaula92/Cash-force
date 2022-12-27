/* eslint-disable camelcase */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line max-lines-per-function
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'providers',
      [
        {
          name: 'CEDENTE 002',
          trading_name: 'CEDENTE 002 LTDA',
          cashforce_tax: null,
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
          bank: null,
          bank_agency: null,
          account: null,
          documents: null,
          phone_number: null,
          situation: null,
          situation_date: null,
          created_at: '2020-10-29 21:22:21',
          updated_at: '2020-10-29 21:22:22',
          cnpj_id: 2,
          email: null,
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('providers', null, {});
  },
};