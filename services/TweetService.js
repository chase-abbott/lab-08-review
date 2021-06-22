import Tweet from '../models/Tweet.js';

export default class TweetService {

  static async insert(body){
    return Tweet.create({
      tweet: body.tweet,
      user: body.user
    });
  }

  static async getAll(){
    return Tweet.find({});
  }

  static async updateById(id, body){
    return Tweet.findByIdAndUpdate(id, body, () => {});
  }

  static async deleteById(id){
    let item;
    await Tweet.findByIdAndRemove(id, (error, deletedItem) => item = deletedItem);
    return item;
  }


}
