import { Router } from 'express';
import materiaController from '../controllers/MateriaController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', materiaController.index);
router.post('/', loginRequired, materiaController.store);
router.put('/:id', loginRequired, materiaController.update);
router.get('/:id', materiaController.show);
router.delete('/:id', loginRequired, materiaController.delete);

export default router;
