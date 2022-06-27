"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _FotoAlunoController = require('../controllers/FotoAlunoController'); var _FotoAlunoController2 = _interopRequireDefault(_FotoAlunoController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();
_cors2.default.call(void 0, );

router.post('/', _loginRequired2.default, _FotoAlunoController2.default.store);

exports. default = router;
