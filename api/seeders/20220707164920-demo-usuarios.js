'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nome: 'Ana Souza',
        ativo: true,
        tipoUsuario: 'paciente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Thiago Silva',
        ativo: true,
        tipoUsuario: 'medico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Augusto de Paula',
        ativo: true,
        tipoUsuario: 'paciente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mikael Luiz',
        ativo: true,
        tipoUsuario: 'paciente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pedro Costa',
        ativo: true,
        tipoUsuario: 'medico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Izabela de Martins',
        ativo: true,
        tipoUsuario: 'paciente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Railson Pereira',
        ativo: false,
        tipoUsuario: 'paciente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Marta Kent',
        ativo: true,
        tipoUsuario: 'paciente',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {}
    );

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});

  }
};
