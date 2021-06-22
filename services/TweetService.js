import Tweet from '../models/Tweet.js';

export default class TweetService {

  static async insert(body){
    const tweet = new Tweet({
      tweet: body.tweet,
      user: body.user,
    });

    
    tweet.save()
      .then((results) => {
        return results;
      })
      .catch((err) => console.log(err));
  }

}
