import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const URL = 'https://api.twitter.com/2/tweets';

const getTweet = async (id) => {
  return fetch(`${URL}/${id}?tweet.fields=author_id,entities`, {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
    .then(results => results.json());
};

export default getTweet;
