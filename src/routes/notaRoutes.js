import { Router } from 'express';
import notaController from '../controllers/NotaController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', notaController.index);
router.post('/', loginRequired, notaController.store);
router.put('/:id', loginRequired, notaController.update);
router.get('/:id', notaController.show);
router.delete('/:id', loginRequired, notaController.delete);
export default router;
