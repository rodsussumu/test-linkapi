import { Router } from 'express';

import PipedriveController from './controllers/PipedriveController';

const routes = Router();

routes.post('/deals', PipedriveController.index);
routes.get('/deals', PipedriveController.list);

export default routes;
