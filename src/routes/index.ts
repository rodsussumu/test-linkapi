import { Router } from 'express';

import PipedriveController from '../controllers/PipedriveController';
import BlingController from '../controllers/BlingController';
import TotalController from '../controllers/TotalController';

const routes = Router();

routes.get('/deals', PipedriveController.list);

routes.post('/orders', BlingController.create);
routes.post('/product', BlingController.createProduct);

routes.post('/total', TotalController.create);
routes.get('/total', TotalController.list);

export default routes;
