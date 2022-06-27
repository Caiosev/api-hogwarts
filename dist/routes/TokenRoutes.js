"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TokenController = require('../controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController);
var _cors = require('../middlewares/cors'); var _cors2 = _interopRequireDefault(_cors);

const router = new (0, _express.Router)();

router.post('/', _cors2.default, _TokenController2.default.store);

exports. default = router;
