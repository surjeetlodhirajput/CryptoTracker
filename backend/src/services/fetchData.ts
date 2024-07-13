import axios from 'axios';
import CryptoData from '../models/CryptoData';

const API_URL = 'https://api.livecoinwatch.com/coins/single';

const fetchData = async () => {
  const symbols = process.env.CRYPTO_SYMBOLS?.split(',') || [];
  const apiKey = process.env.API_KEY;
  console.log('data fetching from the API started for crypto');
  for (const symbol of symbols) {
    try {
      const response = await axios.post(
        API_URL,
        { currency: 'USD', code: symbol, meta: true },
        { headers: { 'x-api-key': apiKey } }
      );

      const data = response.data;

      //insertin data into the mongoDB
      await CryptoData.create({...data, code: symbol});
      console.log(`Data for ${symbol} fetched and stored. and process ended`);
    } catch (error) {
      console.error(`Error fetching data for ${symbol}:`, error);
    }
  }
};

export default fetchData;
