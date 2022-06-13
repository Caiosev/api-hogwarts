"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Prof = require('../models/Prof'); var _Prof2 = _interopRequireDefault(_Prof);
var _Casa = require('../models/Casa'); var _Casa2 = _interopRequireDefault(_Casa);
var _Foto_Aluno = require('../models/Foto_Aluno'); var _Foto_Aluno2 = _interopRequireDefault(_Foto_Aluno);
var _Foto_Prof = require('../models/Foto_Prof'); var _Foto_Prof2 = _interopRequireDefault(_Foto_Prof);
var _Materia = require('../models/Materia'); var _Materia2 = _interopRequireDefault(_Materia);
var _Prova = require('../models/Prova'); var _Prova2 = _interopRequireDefault(_Prova);
var _Sala = require('../models/Sala'); var _Sala2 = _interopRequireDefault(_Sala);

const models = [_Sala2.default, _Casa2.default, _Materia2.default, _Prof2.default, _Aluno2.default, _Foto_Aluno2.default, _Foto_Prof2.default, _Prova2.default];

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((element) => element.init(connection));
models.forEach((element) => element.associate && element.associate(connection.models));
