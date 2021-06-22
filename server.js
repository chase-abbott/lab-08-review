import app from './lib/app.js';
import mongo from './connection.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 7892;

mongo().then(() => {
  app.listen(PORT, () => {
    console.log(`Started on ${PORT}`);
  });
});


process.on('exit', () => {
  console.log('Goodbye!');
});
