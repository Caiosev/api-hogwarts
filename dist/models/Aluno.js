"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa possuir mais de 3 caracteres',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa possuir mais de 3 caracteres',
          },
        },
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero inteiro',
          },
        },
      },
      sangue_status: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Status sanguineo precisa possuir mais de 3 caracteres',
          },
        },
      },
      varinha: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'As propriedades da varinha precisa possuir mais de 3 caracteres',
          },
        },
      },
      patrono: {
        type: _sequelize2.default.STRING,
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
} exports.default = Aluno;
