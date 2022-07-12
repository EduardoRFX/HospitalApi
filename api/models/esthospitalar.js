'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstHospitalar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  EstHospitalar.associate = function(models) {
    EstHospitalar.hasMany(models.Cadastros, {
      foreignKey: 'esthosp_id'
    })
  }
  EstHospitalar.init({
    desc_est: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EstHospitalar',
    paranoid: true,
    timestamps: true
  });
  return EstHospitalar;
};