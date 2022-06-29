"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ProvaController = require('../controllers/ProvaController'); var _ProvaController2 = _interopRequireDefault(_ProvaController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _loginRequiredAluno = require('../middlewares/loginRequiredAluno'); var _loginRequiredAluno2 = _interopRequireDefault(_loginRequiredAluno);

const router = new (0, _express.Router)();

router.get('/', _ProvaController2.default.index);
router.post('/', _loginRequiredAluno2.default, _ProvaController2.default.store);
router.get('/:aluno_id', _ProvaController2.default.show);
router.delete('/:id', _loginRequired2.default, _ProvaController2.default.delete);
exports. default = router;
