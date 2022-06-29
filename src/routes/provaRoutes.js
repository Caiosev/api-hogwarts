import { Router } from 'express';
import provaController from '../controllers/ProvaController';
import loginRequired from '../middlewares/loginRequired';
import loginRequiredAluno from '../middlewares/loginRequiredAluno';

const router = new Router();

router.get('/', provaController.index);
router.post('/', loginRequiredAluno, provaController.store);
router.get('/:aluno_id', provaController.show);
router.delete('/:id', loginRequired, provaController.delete);
export default router;
