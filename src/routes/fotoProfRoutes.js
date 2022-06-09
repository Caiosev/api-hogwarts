import { Router } from 'express';

import fotoController from '../controllers/FotoProfController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;
