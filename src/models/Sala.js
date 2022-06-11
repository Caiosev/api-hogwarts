const { Model, DataTypes } = require('sequelize');

class Sala extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
    }, {
      sequelize,
    });
  }
}

module.exports = Sala;
