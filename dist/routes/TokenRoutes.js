"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _TokenController = require('../controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController);

const router = new (0, _express.Router)();

router.options('*', _cors2.default.call(void 0, ));
router.post('/', _cors2.default.call(void 0, ), _TokenController2.default.store);

exports. default = router;
