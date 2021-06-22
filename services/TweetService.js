import Tweet from '../models/Tweet.js';

export default class TweetService {

  static async insert(body){
    return Tweet.create({
      tweet: body.tweet,
      user: body.user
    })
      .then(results => {
        return results;
      });

  }
  static async getAll(){
    return Tweet.find({})
      .then(results => {
        return results;
      });

  }

}
