import { Router } from 'express';
import tweetService from '../services/TweetService.js';



export default Router()
  .post('/', async (req, res, next) => {
    try{
      const tweet = await tweetService.insert(req.body);
      res.send(tweet);
    }
    catch(err){
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try{
      const tweets = await tweetService.getAll();
      res.send(tweets);
    }
    catch(err){
      next(err);
    }
  });
