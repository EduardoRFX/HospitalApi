'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Cadastros', [
      {
        status: 'Aberto',
        paciente_id: 1,
        esthosp_id: 6,
        quartoClin_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Aberto',
        paciente_id: 3,
        esthosp_id: 2,
        quartoClin_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'fechado',
        paciente_id: 6,
        esthosp_id: 7,
        quartoClin_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Aberto',
        paciente_id: 7,
        esthosp_id: 4,
        quartoClin_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Aberto',
        paciente_id: 4,
        esthosp_id: 5,
        quartoClin_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Fechado',
        paciente_id: 8,
        esthosp_id: 2,
        quartoClin_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cadastros', null, {});
  }
};
