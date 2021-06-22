import express from 'express';
import mongoose from 'mongoose';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import tweetController from '../controllers/tweets.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// connect to mongoDb
const URL = process.env.MONGO_DB_URI;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('we\'re connected!');
  // we're connected!
});

app.use(express.json());

app.use('/api/v1/tweets', tweetController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
