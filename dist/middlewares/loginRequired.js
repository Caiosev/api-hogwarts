"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Prof = require('../models/Prof'); var _Prof2 = _interopRequireDefault(_Prof);

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
    const user = await _Prof2.default.findOne({
      where: {
        id, login,
      },
    });
    if (!user) {
      return res.status(401).json({
        errors: ['Prof Invalido'],
      });
    }
    req.profId = id;
    req.profLogin = login;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token invalido'],
    });
  }
};
