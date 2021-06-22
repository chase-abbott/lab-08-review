import request from 'supertest';
import app from '../lib/app.js';
import Tweet from '../models/Tweet.js';

describe('demo routes', () => {
  beforeEach(() => {
    return Tweet.deleteMany({ user: 'chase' });
  });
  
  it('puts a new tweet in the database', async () => {
    const tweet = {
      tweet: 'lets get it',
      user: 'chase'
    };

    return request(app)
      .post('/api/v1/tweets')
      .send(tweet)
      .then((res) => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          tweet: 'lets get it',
          user: 'chase',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          __v: 0
        });
      });
    
  });

  it('gets all tweets from the database', async () => {
    const tweetOne = {
      tweet: 'lets get it',
      user: 'chase'
    };

    const tweetTwo = {
      tweet: 'yooo',
      user: 'chase'
    };

    await request(app)
      .post('/api/v1/tweets')
      .send(tweetOne);

    await request(app).post('/api/v1/tweets')
      .send(tweetTwo);

    const res = await request(app).get('/api/v1/tweets');
  
    expect(res.body).toEqual([{
      _id: expect.any(String),
      tweet: 'lets get it',
      user: 'chase',
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      __v: 0
    },
    {
      _id: expect.any(String),
      tweet: 'yooo',
      user: 'chase',
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      __v: 0
    }]);
  });

  it('updates a tweet in the database', async () => {

    const tweetOne = {
      tweet: 'lets get it',
      user: 'chase'
    };

    const postres = await request(app)
      .post('/api/v1/tweets')
      .send(tweetOne);

    const updateres = await request(app)
      .put(`/api/v1/tweets/${postres.body._id}`)
      .send({ tweet: 'wait up!' });

    expect(updateres.body).toEqual({
      _id: expect.any(String),
      tweet: 'wait up!',
      user: 'chase',
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      __v: 0
    });
  });


});
