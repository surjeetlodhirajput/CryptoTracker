import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    let CONNECTION_STRING = process.env.MONGO_URL || ''
    await mongoose.connect(CONNECTION_STRING);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
