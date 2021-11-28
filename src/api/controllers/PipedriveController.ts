import { Request, Response } from 'express';
import PipedriveService from '../services/PipedriveService';

export default {
  async index(request: Request, response: Response) {
    const { title, value } = request.body;

    const pipedriveService = new PipedriveService();
    const createdDeal = await pipedriveService.createDeal({ title, value });

    return response.send(createdDeal);
  },

  async list(request: Request, response: Response) {
    const pipedriveService = new PipedriveService();
    const allDeals = await pipedriveService.getDeals();

    return response.send(allDeals);
  },
};
