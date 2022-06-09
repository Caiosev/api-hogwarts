"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _NotaController = require('../controllers/NotaController'); var _NotaController2 = _interopRequireDefault(_NotaController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _NotaController2.default.index);
router.post('/', _loginRequired2.default, _NotaController2.default.store);
router.put('/:id', _loginRequired2.default, _NotaController2.default.update);
router.get('/:id', _NotaController2.default.show);
router.delete('/:id', _loginRequired2.default, _NotaController2.default.delete);
exports. default = router;
