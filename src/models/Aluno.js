const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      sangue_status: DataTypes.STRING,
      varinha: DataTypes.STRING,
      patrono: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'alunos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.salas, { foreignKey: 'sala_id', as: 'aluno-sala' });
    this.belongsTo(models.casas, { foreignKey: 'casa_id', as: 'aluno-casa' });
  }
}

module.exports = Aluno;

// {
// 	"nome":"Hermione",
// 	"sobrenome":"Granger",
// 	"idade":12,
// 	"sangue_status":"nascido de trouxa",
// 	"varinha":"videira, com 27,305cm núcleo de fibra de coração de dragão.",
// 	"patrono":"Lontra",
// 	"sala_id":1,
// 	"casa_id":1
// }
