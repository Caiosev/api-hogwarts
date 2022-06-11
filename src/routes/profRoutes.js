import { Router } from 'express';
import profController from '../controllers/ProfController';
// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/:id', profController.show);
router.get('/', profController.index);

router.post('/', profController.store);
router.put('/', profController.update);
router.delete('/', profController.delete);
export default router;
