import PipedriveService from './PipedriveService';
import Order from '../interfaces/order';
import utils from '../utils/';
import Deal from '../interfaces/deal';
import axios from 'axios';

const apiURL = 'https://bling.com.br/Api/v2/pedido/json/';
const apiProducts = 'https://bling.com.br/Api/v2/produto/json/';

class BlingService {
  async createOrder() {
    const pipedriveService = new PipedriveService();
    const dealsWon = await pipedriveService.getDeals();

    dealsWon.map(async (deal: Deal) => {
      const xml = utils.transformXml(deal);
      await axios.post(
        apiURL,
        {},
        {
          params: {
            apikey: process.env.BLING_TOKEN,
            xml: xml,
          },
        },
      );
    });

    return { status: 200, message: 'Success', ordersCreated: dealsWon };
  }

  async createProduct() {
    const product = await axios.post(
      apiProducts,
      {},
      {
        params: {
          apikey: process.env.BLING_TOKEN,
          xml: utils.xmlProduct(),
        },
      },
    );

    return { status: 200, message: product.data };
  }
}

export default BlingService;
