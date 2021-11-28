import PipedriveApi from '../configs/PipedriveApi';

interface Deal {
  title: string;
  value: string;
}

class PipedriveService {
  async createDeal(_deal: Deal) {
    const deal = await PipedriveApi.post(
      `/deals?api_token=${process.env.PIPEDRIVE_TOKEN}`,
      _deal,
    );
    return deal.data;
  }

  async getDeals() {
    const deals = await PipedriveApi.get(
      `/deals?api_token=${process.env.PIPEDRIVE_TOKEN}`,
    );
    return deals.data;
  }
}

export default PipedriveService;
