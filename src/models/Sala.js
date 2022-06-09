import Sequelize, { Model } from 'sequelize';

export default class Sala extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 255],
            msg: 'O nome da sala nao pode ser vazio',
          },
        },
      },
    }, { sequelize });
  }

  static associate(models) {
    this.hasMany(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
