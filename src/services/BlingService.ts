import PipedriveService from './PipedriveService';
import Order from '../interfaces/order';
import utils from '../utils/';
import Deal from '../interfaces/deal';
import axios from 'axios';
import Product from '../interfaces/product';

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

    const response = [...product.data.retorno.produtos];

    const responseProduct: Array<Product> = [];

    response.map((product) => {
      responseProduct.push({
        codigo: product.produto.codigo,
        descricao: product.produto.descricao,
        situacao: product.produto.situacao,
        preco: product.produto.preco,
      });
    });

    return responseProduct;
  }

  async getOrders() {
    const date = new Date();
    const dataEmissao = new Date();
    dataEmissao.setDate(dataEmissao.getDate() - 1);

    const orders = await axios.get(apiGetPedidos, {
      params: {
        apikey: process.env.BLING_TOKEN,
        filters: `dataEmissao[${dataEmissao.toLocaleDateString(
          'pt-BR',
        )} TO ${dataEmissao.toLocaleDateString('pt-BR')}]`,
      },
    });

    return orders.data.retorno;
  }
}

export default BlingService;
