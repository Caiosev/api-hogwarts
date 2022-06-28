"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Prof = require('../models/Prof'); var _Prof2 = _interopRequireDefault(_Prof);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class TokenController {
  async store(req, res) {
    const { login = '', senha = '' } = req.body;
    if (!login || !senha) {
      return res.status(401).json({
        errors: ['Credenciais invalidas'],
      });
    }

    const prof = await _Prof2.default.findOne({ where: { login } });
    const aluno = await _Aluno2.default.findOne({ where: { login } });
    if (prof) {
      if (!(await prof.passwordIsValid(senha))) {
        return res.status(401).json({
          errors: ['Senha invalida'],
        });
      }
      const { id } = prof;
      const token = _jsonwebtoken2.default.sign({ id, login }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      return res.json({
        token,
        user: {
          id: prof.id, nome: prof.nome, sobrenome: prof.sobrenome, materia_id: prof.materia_id,
        },
      });
    } if (aluno) {
      if (!(await aluno.passwordIsValid(senha))) {
        return res.status(401).json({
          errors: ['Senha invalida'],
        });
      }
      const { id } = aluno;
      const token = _jsonwebtoken2.default.sign({ id, login }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      return res.json({
        token,
        user: {
          id: aluno.id,
          nome: aluno.nome,
          sobrenome: aluno.sobrenome,
          idade: aluno.idade,
          sangue:
          aluno.sangue_status,
          varinha: aluno.varinha,
          patrono: aluno.patrono,
          sala: aluno.sala_id,
          casa: aluno.casa_id,
          login: aluno.login,
        },
      });
    }
    return res.status(401).json({
      errors: ['Profs nao existe'],
    });
  }
}
exports. default = new TokenController();
