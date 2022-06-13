"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ProfController = require('../controllers/ProfController'); var _ProfController2 = _interopRequireDefault(_ProfController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/:id', _ProfController2.default.show);
router.get('/', _ProfController2.default.index);

router.post('/', _loginRequired2.default, _ProfController2.default.store);
router.put('/', _loginRequired2.default, _ProfController2.default.update);
router.delete('/', _loginRequired2.default, _ProfController2.default.delete);
exports. default = router;
