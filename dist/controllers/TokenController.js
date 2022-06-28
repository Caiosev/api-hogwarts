"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Prof = require('../models/Prof'); var _Prof2 = _interopRequireDefault(_Prof);

class TokenController {
  async store(req, res) {
    const { login = '', senha = '' } = req.body;
    if (!login || !senha) {
      return res.status(401).json({
        errors: ['Credenciais invalidas'],
      });
    }

    const prof = await _Prof2.default.findOne({ where: { login } });

    if (!prof) {
      return res.status(401).json({
        errors: ['Profs nao existe'],
      });
    }

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
  }
}
exports. default = new TokenController();
