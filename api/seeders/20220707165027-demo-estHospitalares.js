'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('EstHospitalars', [
      {
        desc_est: "Inicial",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_est: "Repouso",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_est: "Cirurgico",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_est: "Avançado",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_est: "Pós-Cirurgia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_est: "Analise",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_est: "Possivel Falecimento",
        createdAt: new Date(),
        updatedAt: new Date()
      },


    ], {});

  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('EstHospitalars', null, {});
  }
};
