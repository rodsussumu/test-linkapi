import { Router } from 'express';

import PipedriveController from '../controllers/PipedriveController';
import BlingController from '../controllers/BlingController';

const routes = Router();

routes.get('/deals', PipedriveController.list);

routes.post('/orders', BlingController.create);
routes.post('/product', BlingController.createProduct);

export default routes;
