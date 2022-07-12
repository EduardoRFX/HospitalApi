'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('EstHospitalars', 'deletedAt', {

            allowNull: true,
            type: Sequelize.DATE

        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('EstHospitalars', 'deletedAt');
    }
};