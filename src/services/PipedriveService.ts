import axios from 'axios';
import Deal from '../interfaces/deal';

const apiURL = 'https://api.pipedrive.com/api/v1/deals';

class PipedriveService {
  async getDeals(): Promise<Deal[]> {
    const { data: dealsPipe } = await axios.get(apiURL, {
      params: {
        api_token: process.env.PIPEDRIVE_TOKEN,
        status: 'won',
      },
    });

    const deals: Array<Deal> = [];
    dealsPipe.data.map((deal: Deal) => {
      deals.push({
        title: deal.title,
        value: deal.value,
        org_name: deal.org_name,
        person_name: deal.person_name,
        products_count: deal.products_count,
        won_time: deal.won_time,
      });
    });
    return deals;
  }
}

export default PipedriveService;
