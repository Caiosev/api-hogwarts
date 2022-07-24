/* eslint-disable no-return-await */
import Prova from '../models/Prova';
import Aluno from '../models/Aluno';
import Prof from '../models/Prof';
import Casa from '../models/Casa';

class ProvaController {
  async index(req, res) {
    const provas = await Prova.findAll({
      include:
     [
       {
         association: 'prova-aluno',
         model: Aluno,
         include: [{ association: 'aluno-casa' }],
       },
       {
         association: 'prova-prof',
         model: Prof,
         include: [{ association: 'prof-materia' }],
       },
     ],
    });
    res.json(provas);
  }

  async store(req, res) {
    try {
      const prova = await Prova.create(req.body);
      const nota = prova.dataValues.valor;
      const id = prova.dataValues.aluno_id;
      const aluno = await Aluno.findByPk(id);
      const { casa_id } = aluno.dataValues;
      const casa = await Casa.findByPk(casa_id);
      const { nota_total } = casa.dataValues;
      const notafinal = Number(nota_total) + Number(nota);
      casa.nota_total = notafinal;
      await Casa.update(casa.dataValues, { where: { id: casa_id } });
      return res.json(prova);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { aluno_id } = req.params;
      if (!aluno_id) {
        return res.status(400).json({
          errors: ['Sem ID'],
        });
      }

      const prova = await Prova.findAll({
        where: { aluno_id },
        include:
        [
          {
            association: 'prova-aluno',
            model: Aluno,
            include: [{ association: 'aluno-casa' }],
          },
          {
            association: 'prova-prof',
            model: Prof,
            include: [{ association: 'prof-materia' }],
          },
        ],
      });

      return res.json(prova);
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

      const prova = await Prova.findByPk(id);
      if (!prova) {
        return res.status(400).json({
          errors: ['Prova nao existe'],
        });
      }

      const casaAtualizado = await Prova.update(req.body);

      return res.json(casaAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { aluno_id } = req.params;
      if (!aluno_id) {
        return res.status(400).json({
          errors: ['Sem ID'],
        });
      }

      const provas = await Prova.findAll({
        where: { aluno_id },
        include:
        [
          {
            association: 'prova-aluno',
            model: Aluno,
            include: [{ association: 'aluno-casa' }],
          },
          {
            association: 'prova-prof',
            model: Prof,
            include: [{ association: 'prof-materia' }],
          },
        ],
      });

      if (!provas) {
        return res.status(400).json({
          errors: ['Prova nao existe'],
        });
      }
      const valores = provas.map((prova) => prova.valor).reduce((prev, curr) => prev + curr, 0);

      const nota = valores;
      const aluno = await Aluno.findByPk(aluno_id);
      const { casa_id } = aluno.dataValues;
      const casa = await Casa.findByPk(casa_id);
      const { nota_total } = casa.dataValues;
      const notafinal = Number(nota_total) - Number(nota);
      casa.nota_total = notafinal;
      await Casa.update(casa.dataValues, { where: { id: casa_id } });
      provas.forEach(async (prova) => await prova.destroy());
      return res.json({ Deletado: true });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }
}
export default new ProvaController();
