import BlingService from './BlingService';
import Total from '../interfaces/total';
import TotalOrder from '../database/schemas/TotalOrderSchema';

class TotalService {
  async postTotalOrder() {
    const blingService = new BlingService();
    const allOrders = await blingService.getOrders();
    const pedidos = [...allOrders.pedidos];

    const Total = {
      date: new Date(),
      dateLocale: new Date().toLocaleDateString('pt-BR'),
      count: 0,
      value: 0,
    };

    pedidos.map(({ pedido }) => {
      Total.count += 1;
      Total.value += Number(pedido.totalvenda);
    });

    const totalOrder = new TotalOrder(Total);
    totalOrder.save();

    return Total;
  }

  async getTotalOrder() {
    const totalOrder = TotalOrder.find();
    return totalOrder;
  }
}

export default TotalService;
