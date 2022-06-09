import Sequelize, { Model } from 'sequelize';

export default class Materia extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 255],
            msg: 'Nome da Materia nao pode ser vazio',
          },
        },
      },
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Prof, { foreignKey: 'prof_id' });
  }
}
