import { Router } from 'express';
import profController from '../controllers/ProfController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/:id', profController.show);
router.get('/', profController.index);

router.post('/', loginRequired, profController.store);
router.put('/:id', loginRequired, profController.update);
router.delete('/', loginRequired, profController.delete);
export default router;
