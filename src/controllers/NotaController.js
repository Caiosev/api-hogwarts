// import Nota from '../models/Nota';

// class MateriaController {
//   async index(req, res) {
//     const notas = await Nota.findAll();
//     res.json(notas);
//   }

//   async store(req, res) {
//     try {
//       const nota = await Nota.create(req.body);
//       return res.json(nota);
//     } catch (e) {
//       return res.status(400).json({
//         errors: e.errors.map((err) => err.message),
//       });
//     }
//   }

//   async show(req, res) {
//     try {
//       const { id } = req.params;
//       if (!id) {
//         return res.status(400).json({
//           errors: ['Sem ID'],
//         });
//       }

//       const nota = await Nota.findByPk(id);

//       if (!nota) {
//         return res.status(400).json({
//           errors: ['Nota nao existe'],
//         });
//       }

//       return res.json(nota);
//     } catch (e) {
//       return res.status(400).json({
//         errors: e.erros.map((err) => err.message),
//       });
//     }
//   }

//   async update(req, res) {
//     try {
//       const { id } = req.params;
//       if (!id) {
//         return res.status(400).json({
//           errors: ['Sem ID'],
//         });
//       }

//       const nota = await Nota.findByPk(id);
//       if (!nota) {
//         return res.status(400).json({
//           errors: ['Nota nao existe'],
//         });
//       }

//       const casaAtualizado = await Nota.update(req.body);

//       return res.json(casaAtualizado);
//     } catch (e) {
//       return res.status(400).json({
//         errors: e.erros.map((err) => err.message),
//       });
//     }
//   }

//   async delete(req, res) {
//     try {
//       const { id } = req.params;
//       if (!id) {
//         return res.status(400).json({
//           errors: ['Sem ID'],
//         });
//       }

//       const nota = await Nota.findByPk(id);

//       if (!nota) {
//         return res.status(400).json({
//           errors: ['Nota nao existe'],
//         });
//       }

//       await nota.destroy();
//       return res.json({ Deletado: true });
//     } catch (e) {
//       return res.status(400).json({
//         errors: e.erros.map((err) => err.message),
//       });
//     }
//   }
// }
// export default new MateriaController();
