import { Request, Response } from 'express';
import PipedriveService from '../services/PipedriveService';

export default {
  async list(request: Request, response: Response) {
    const pipedriveService = new PipedriveService();
    const allDeals = await pipedriveService.getDeals();
    return response.send(allDeals);
  },
};
