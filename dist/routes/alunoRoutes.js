"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _cors = require('../middlewares/cors'); var _cors2 = _interopRequireDefault(_cors);
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _cors2.default, _AlunoController2.default.index);
router.post('/', _cors2.default, _loginRequired2.default, _AlunoController2.default.store);
router.put('/:id', _cors2.default, _loginRequired2.default, _AlunoController2.default.update);
router.get('/:id', _cors2.default, _AlunoController2.default.show);
router.delete('/:id', _cors2.default, _loginRequired2.default, _AlunoController2.default.delete);

exports. default = router;
