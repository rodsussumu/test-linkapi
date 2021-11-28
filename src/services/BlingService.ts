import PipedriveService from './PipedriveService';
import Order from '../interfaces/order';
import utils from '../utils/';
import Deal from '../interfaces/deal';
import axios from 'axios';

const apiPostPedido = 'https://bling.com.br/Api/v2/pedido/json/';
const apiPostProduct = 'https://bling.com.br/Api/v2/produto/json/';
const apiGetPedidos = 'https://bling.com.br/Api/v2/pedidos/json/';

class BlingService {
  async createOrder(): Promise<Deal[]> {
    const pipedriveService = new PipedriveService();
    const dealsWon = await pipedriveService.getDeals();

    dealsWon.map(async (deal: Deal) => {
      const xml = utils.transformXml(deal);
      await axios.post(
        apiPostPedido,
        {},
        {
          params: {
            apikey: process.env.BLING_TOKEN,
            xml: xml,
          },
        },
      );
    });

    return dealsWon;
  }

  async createProduct() {
    const product = await axios.post(
      apiPostProduct,
      {},
      {
        params: {
          apikey: process.env.BLING_TOKEN,
          xml: utils.xmlProduct(),
        },
      },
    );

    return product;
  }

  async getOrders() {
    const orders = await axios.get(apiGetPedidos, {
      params: {
        apikey: process.env.BLING_TOKEN,
      },
    });

    return orders.data.retorno;
  }
}

export default BlingService;
