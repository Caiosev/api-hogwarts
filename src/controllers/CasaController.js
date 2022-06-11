import Casa from '../models/Casa';

class CasaController {
  async index(req, res) {
    const casas = await Casa.findAll();
    res.json(casas);
  }

  async store(req, res) {
    try {
      const casa = await Casa.create(req.body);
      return res.json(casa);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Sem ID'],
        });
      }

      const casa = await Casa.findByPk(id);

      if (!casa) {
        return res.status(400).json({
          errors: ['Casa nao existe'],
        });
      }

      return res.json(casa);
    } catch (e) {
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Sem ID'],
        });
      }

      const casa = await Casa.findByPk(id);
      if (!casa) {
        return res.status(400).json({
          errors: ['Casa nao existe'],
        });
      }

      await Casa.update(req.body, { where: { id } });

      return res.json({ sucesso: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Sem ID'],
        });
      }

      const casa = await Casa.findByPk(id);

      if (!casa) {
        return res.status(400).json({
          errors: ['Casa nao existe'],
        });
      }

      await casa.destroy();
      return res.json({ Deletado: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }
}
export default new CasaController();
