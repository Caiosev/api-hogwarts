"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }
  const [, token] = authorization.split(' ');

  try {
    const data = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, login } = data;
    const user = await _Aluno2.default.findOne({
      where: {
        id, login,
      },
    });
    if (!user) {
      return res.status(401).json({
        errors: ['Aluno Invalido'],
      });
    }
    req.AlunoId = id;
    req.AlunoLogin = login;
    return next();
  } catch (e) {
    console.log(e);
    // return res.status(401).json({
    //   errors: ['Token invalido'],
    // });
  }
};
