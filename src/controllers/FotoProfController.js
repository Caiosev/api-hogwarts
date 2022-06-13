import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto_Prof';

const upload = multer(multerConfig).single('foto');
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
        const foto = await Foto.create({ originalname, filename, prof_id });
        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['prof nao existe'],
        });
      }
    });
  }
}
export default new FotoController();
