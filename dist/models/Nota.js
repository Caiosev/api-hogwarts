"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Nota extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      valor: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Nota precisa ser um numero inteiro',
          },
        },
      },
    }, { sequelize });
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
    this.hasMany(models.Prof, { foreignKey: 'prof_id' });
    this.hasMany(models.Materia, { foreignKey: 'materia_id' });
    this.hasMany(models.Casa, { foreignKey: 'casa_id' });
  }
} exports.default = Nota;
