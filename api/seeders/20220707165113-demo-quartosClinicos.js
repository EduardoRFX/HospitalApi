'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('QuartosClinicos', [
      {
        Medico_id: 2,
        numero: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Medico_id: 2,
        numero: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Medico_id: 5,
        numero: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Medico_id: 2,
        numero: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Medico_id: 5,
        numero: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Medico_id: 5,
        numero: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Medico_id: 2,
        numero: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Medico_id: 5,
        numero: 38,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('QuartosClinicos', null, {});
  }
};
