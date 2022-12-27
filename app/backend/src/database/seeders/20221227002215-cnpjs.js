/** @type {import('sequelize-cli').Migration} */
const dateTime = '2020-10-29 21:20:33';
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
    'cnpjs', 
      [{
      cnpj: '00000000000001',
      company_type: '2',
      created_at: dateTime,
      updated_at: dateTime,
      },
      {
        cnpj: '00000000000002',
        company_type: '1',
        created_at: dateTime,
        updated_at: dateTime,
      },
      ],
    {},
  );
},

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('cnpjs', null, {});
  },
};
