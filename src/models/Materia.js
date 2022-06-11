const { Model, DataTypes } = require('sequelize');

class Materia extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'materias',
    });
  }
}

module.exports = Materia;
