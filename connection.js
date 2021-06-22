import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export default (url = process.env.MONGO_DB_URI) => {
  mongoose.connection.on('connected', () => {
    console.log('connected to mongodb');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('disconnected');
  });

  mongoose.connection.on('error', () => {
    console.log('Error, connection failed');
  });

  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
};


