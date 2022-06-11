const { Model, DataTypes } = require('sequelize');

class Casa extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      nota_total: DataTypes.INTEGER,
    }, {
      sequelize,
    });
  }
}

module.exports = Casa;
