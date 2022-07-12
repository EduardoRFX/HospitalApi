'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('QuartosClinicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero: {
        type: Sequelize.INTEGER
      },
      medico_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Usuarios', key: 'id' }
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
    await queryInterface.dropTable('QuartosClinicos');
  }
};