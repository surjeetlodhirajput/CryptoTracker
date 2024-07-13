import cron from 'node-cron';
import fetchData from './services/fetchData';

const scheduleJobs = () => {
  // Schedule to run every 5 seconds
  cron.schedule('*/5 * * * * *', async () => {
    console.log('Fetching data...');
    await fetchData();
  });
};

export default scheduleJobs;
