import { Router } from 'express';
import cors from 'cors';

import fotoController from '../controllers/FotoAlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
cors();

router.post('/', loginRequired, fotoController.store);

export default router;
