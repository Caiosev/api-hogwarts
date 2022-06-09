import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa possuir mais de 3 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa possuir mais de 3 caracteres',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero inteiro',
          },
        },
      },
      sangue_status: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Status sanguineo precisa possuir mais de 3 caracteres',
          },
        },
      },
      varinha: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'As propriedades da varinha precisa possuir mais de 3 caracteres',
          },
        },
      },
      patrono: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O patrono precisa possuir mais de 3 caracteres',
          },
        },
      },
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto_Aluno, { foreignKey: 'aluno_id' });
    this.belongsTo(models.Sala, { foreignKey: 'aluno_id' });
    this.belongsTo(models.Casa, { foreignKey: 'aluno_id' });
  }
}
