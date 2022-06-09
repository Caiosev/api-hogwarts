import Sequelize, { Model } from 'sequelize';

export default class Casa extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 255],
            msg: 'O nome da casa nao pode ser vazio',
          },
        },
      },
      nota: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero inteiro',
          },
        },
      },
    }, { sequelize });
  }

  static associate(models) {
    this.hasMany(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
