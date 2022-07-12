'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    
   

  }
  Usuarios.associate = function(models) {
   Usuarios.hasMany(models.Cadastros, {
     foreignKey: 'paciente_id',
     scopes: { status : 'Aberto' },
     as: 'cadastrosAbertos',
   }),
   Usuarios.hasMany(models.QuartosClinicos, {
    foreignKey: 'medico_id'
  })
 }
    Usuarios.init({
    nome:{ 
      type : DataTypes.STRING,
      validate: {
        funcaoValidadora : function(dado){
          if(dado.length < 3) throw new Error('O CAMPO NOME DEVE TER MAIS QUE TRÊS CARACTERES!')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    tipoUsuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
    paranoid: true,
    timestamps: true,
    defaultScope: {
      where:{ ativo : true }
    },
    scopes: {
      todos:{ where: {} }
    }
  });
  return Usuarios;
};