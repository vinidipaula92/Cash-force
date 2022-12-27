/* eslint-disable camelcase */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'ALLAN SOUZA',
          email: 'allan@cashforce.com.br',
          phone_number: null,
          mobile: null,
          departament: null,
          verification_code: '',
          email_checked: 1,
          created_at: '2020-10-01 21:31:37',
          updated_at: '2020-10-01 22:41:23',
          cashforce_adm: 1,
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
