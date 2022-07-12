'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cadastros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      paciente_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Usuarios', key: 'id' }
      },
      esthosp_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'EstHospitalars', key: 'id' }
      },
      quartoClin_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'QuartosClinicos', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cadastros');
  }
};