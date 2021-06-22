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
  })
  .put('/:id', async (req, res, next) => {
    try{
      const tweet = await tweetService.updateById(req.params.id, req.body);
      res.send(tweet);
    }
    catch(err){
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try{
      const tweet = await tweetService.deleteById(req.params.id, res);
      res.send(tweet);
    }
    catch(err){
      next(err);
    }
  });
