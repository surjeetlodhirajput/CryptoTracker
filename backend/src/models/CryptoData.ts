import mongoose, { Schema, Document } from 'mongoose';

interface ICryptoData extends Document {
  code: string;
  name: string;
  rank: number;
  age: number;
  color: string;
  png32: string;
  png64: string;
  webp32: string;
  webp64: string;
  exchanges: number;
  markets: number;
  pairs: number;
  categories: string[];
  allTimeHighUSD: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  links: Record<string, string | null>;
  rate: number;
  volume: number;
  cap: number;
  liquidity: number;
  delta: {
    hour: number;
    day: number;
    week: number;
    month: number;
    quarter: number;
    year: number;
  };
}

const CryptoDataSchema: Schema = new Schema({
  code:{type: String, required: true},
  name: { type: String, required: true },
  rank: { type: Number, required: true },
  age: { type: Number, required: true },
  color: { type: String, required: true },
  png32: { type: String, required: true },
  png64: { type: String, required: true },
  webp32: { type: String, required: true },
  webp64: { type: String, required: true },
  exchanges: { type: Number, required: true },
  markets: { type: Number, required: true },
  pairs: { type: Number, required: true },
  categories: { type: [String], required: true },
  allTimeHighUSD: { type: Number, required: true },
  circulatingSupply: { type: Number, required: true },
  totalSupply: { type: Number, required: true },
  maxSupply: { type: Number, required: true },
  links: { type: Map, of: String, required: true },
  rate: { type: Number, required: true },
  volume: { type: Number, required: true },
  cap: { type: Number, required: true },
  liquidity: { type: Number, required: true },
  delta: {
    hour: { type: Number, required: true },
    day: { type: Number, required: true },
    week: { type: Number, required: true },
    month: { type: Number, required: true },
    quarter: { type: Number, required: true },
    year: { type: Number, required: true },
  },
},{
    timestamps: true
});

export default mongoose.model<ICryptoData>('CryptoData', CryptoDataSchema);
