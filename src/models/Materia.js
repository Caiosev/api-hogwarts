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

  static associate(models) {
    this.hasOne(models.profs, { foreignKey: 'materia_id', as: 'materia-prof' });
  }
}

module.exports = Materia;
