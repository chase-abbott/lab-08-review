import { Router } from 'express';
// import tweetService from '../services/TweetService.js';
import Tweet from '../models/Tweet.js';


export default Router()
  .post('/', async (req, res, next) => {
    try{
      const tweet = new Tweet({
        tweet: req.body.tweet,
        user: req.body.user
      });
      
      tweet.save()
        .then(results => res.send(results));
    }
    catch(err){
      next(err);
    }
  });
