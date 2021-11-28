import { Request, Response } from 'express';
import TotalService from '../services/TotalService';

export default {
  async create(request: Request, response: Response) {
    const totalService = new TotalService();
    const total = await totalService.postTotalOrder();
    return response.send(total);
  },

  async list(request: Request, response: Response) {
    const totalService = new TotalService();
    const total = await totalService.getTotalOrder();
    console.log(total);
    return response.send(total);
  },
};
