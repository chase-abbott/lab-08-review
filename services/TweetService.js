import Tweet from '../models/Tweet.js';
import getTweet from '../lib/utils/twitter-api.js';

export default class TweetService {

  static async insert(id){
    const { data } = await getTweet(id);
    return Tweet.create({
      tweet: data.text,
      user: data.author_id,
      tweetId: data.id
    });
  }

  static async getAll(){
    return Tweet.find({});
  }

  static async updateById(id, body){
    return Tweet.findByIdAndUpdate(id, body, () => {});
  }

  static async deleteById(id){
    return Tweet.findByIdAndDelete(id);
  }


}
