import { CronJob } from 'cron';
import TotalService from '../services/TotalService';

class TotalJob {
  cronJob: CronJob;

  constructor() {
    this.cronJob = new CronJob(
      '0 0 0 * * *',
      async () => {
        const totalService = new TotalService();
        await totalService.postTotalOrder();
      },
      null,
      true,
      'America/Sao_Paulo',
    );
    if (!this.cronJob.running) {
      this.cronJob.start();
    }
  }
}

export default TotalJob;
