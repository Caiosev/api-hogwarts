"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _Foto_Prof = require('../models/Foto_Prof'); var _Foto_Prof2 = _interopRequireDefault(_Foto_Prof);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('foto');
class FotoController {
  async store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { prof_id } = req.body;
        const foto = await _Foto_Prof2.default.create({ originalname, filename, prof_id });
        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['prof nao existe'],
        });
      }
    });
  }
}
exports. default = new FotoController();
