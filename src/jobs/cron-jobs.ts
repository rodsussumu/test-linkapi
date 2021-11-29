import { CronJob } from 'cron';
import TotalService from '../services/TotalService';

/// Job para adicionar todos os orders ao completar 00:00:00(adiciona os jobs do dia anterior)
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
