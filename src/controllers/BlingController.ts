import { Request, Response } from 'express';
import BlingService from '../services/BlingService';

export default {
  async create(request: Request, response: Response) {
    const blingService = new BlingService();
    const createdOrder = await blingService.createOrder();
    return response.send(createdOrder);
  },

  async createProduct(request: Request, response: Response) {
    const blingService = new BlingService();
    const createdOrder = await blingService.createProduct();
    return response.send(createdOrder.data.retorno);
  },
};
