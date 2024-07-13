import express from 'express';
import connectDB from './config/mongodb';
import scheduleJobs from './scheduler';
import dotenv from 'dotenv';
import CryptoData from './models/CryptoData';
const cors = require('cors');
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
  origin: '*', // Allows all origins
  methods: ['GET', 'POST'], // Allowed methods
}));
//making connection to the database
connectDB();
//scheduling to fetch data after every 10 sec
scheduleJobs();
app.get('/availableCryptoList',(req,res)=>{
    const symbols = process.env.CRYPTO_SYMBOLS?.split(',') || [];
    res.send(symbols)
})
app.get('/getRecords/:cryptoCode?', async(req, res) => {
  try{
    const symbol =  req.params.cryptoCode;
    const symbols = process.env.CRYPTO_SYMBOLS?.split(',');
    if(symbols?.find((value: string)=> value === symbol)){
        let result = await CryptoData.find({ code: symbol }).sort({ createdAt: -1 }).limit(20);
        res.status(200).json(result);
    }
    else{
        res.status(204).json([]);
    }
  }
  catch{
    res.status(500).json([]);
  }
});
app.get('/health',(req,res)=>{
    res.send('App is Healthy!');
})
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
