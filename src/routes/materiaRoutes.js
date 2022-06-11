import { Router } from 'express';
import materiaController from '../controllers/MateriaController';
// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', materiaController.index);
router.post('/', materiaController.store);
router.put('/:id', materiaController.update);
router.get('/:id', materiaController.show);
router.delete('/:id', materiaController.delete);

export default router;
