"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Utilizados:
// Nodemon para atualizar sempre que há alterações
// Sucrase para utilizar import e export from no node

var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
// import cors from 'cors';
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path');
var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _profRoutes = require('./routes/profRoutes'); var _profRoutes2 = _interopRequireDefault(_profRoutes);
var _TokenRoutes = require('./routes/TokenRoutes'); var _TokenRoutes2 = _interopRequireDefault(_TokenRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _fotoAlunoRoutes = require('./routes/fotoAlunoRoutes'); var _fotoAlunoRoutes2 = _interopRequireDefault(_fotoAlunoRoutes);
var _fotoProfRoutes = require('./routes/fotoProfRoutes'); var _fotoProfRoutes2 = _interopRequireDefault(_fotoProfRoutes);
var _casaRoutes = require('./routes/casaRoutes'); var _casaRoutes2 = _interopRequireDefault(_casaRoutes);
var _materiaRoutes = require('./routes/materiaRoutes'); var _materiaRoutes2 = _interopRequireDefault(_materiaRoutes);
var _provaRoutes = require('./routes/provaRoutes'); var _provaRoutes2 = _interopRequireDefault(_provaRoutes);
var _salaRoutes = require('./routes/salaRoutes'); var _salaRoutes2 = _interopRequireDefault(_salaRoutes);

require('./database');

_dotenv2.default.config();

// const corsOptions = {
//   origin: '*',
// };

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // this.app.use(cors(corsOptions));
    // this.app.options('*', cors(corsOptions));
    this.app.all('/*', (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With');
      next();
    });
    this.app.use(_helmet2.default.call(void 0, { crossOriginResourcePolicy: false }));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/prof', _profRoutes2.default);
    this.app.use('/tokens', _TokenRoutes2.default);
    this.app.use('/alunos', _alunoRoutes2.default);
    this.app.use('/casas', _casaRoutes2.default);
    this.app.use('/provas', _provaRoutes2.default);
    this.app.use('/materias', _materiaRoutes2.default);
    this.app.use('/salas', _salaRoutes2.default);
    this.app.use('/fotosAlunos', _fotoAlunoRoutes2.default);
    this.app.use('/fotosProf', _fotoProfRoutes2.default);
  }
}

exports. default = new App().app;
