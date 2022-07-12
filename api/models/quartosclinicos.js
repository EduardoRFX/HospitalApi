'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuartosClinicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  QuartosClinicos.associate = function(models) {
    QuartosClinicos.hasMany(models.Cadastros, {
      foreignKey: 'quartoClin_id'
    }),
    QuartosClinicos.belongsTo(models.Usuarios, {
      foreignKey: 'medico_id'
    })
  }
  QuartosClinicos.init({
    numero: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QuartosClinicos',
    paranoid: true,
    timestamps: true
  });
  return QuartosClinicos;
};