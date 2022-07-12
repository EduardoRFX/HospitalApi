'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cadastros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

   Cadastros.associate = function(models) {
    Cadastros.belongsTo(models.Usuarios, {
      foreignKey: 'paciente_id'
    }),
    Cadastros.belongsTo(models.QuartosClinicos, {
      foreignKey: 'quartoClin_id'
    }),
    Cadastros.belongsTo(models.EstHospitalar, {
      foreignKey: 'esthosp_id'
    })
  }
  Cadastros.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cadastros',
    paranoid: true,
    timestamps: true
  });
  return Cadastros;
};