import request from 'supertest';
import app from '../lib/app.js';
import Tweet from '../models/Tweet.js';

describe('demo routes', () => {
  beforeEach(() => {
    return Tweet.deleteMany({});
  });
  
  it('puts a new tweet in the database', async () => {
    const tweetId = '1407376767204085760';

    return request(app)
      .post(`/api/v1/tweets/${tweetId}`)
      .then((res) => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          tweet: expect.any(String),
          tweetId: expect.any(String),
          user: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          __v: 0
        });
      });
    
  });

  it('gets all tweets from the database', async () => {
    const tweetOne = '1407376767204085760';

    const tweetTwo = '1407385394597990400';

    await request(app).post(`/api/v1/tweets/${tweetOne}`);
  
    await request(app).post(`/api/v1/tweets/${tweetTwo}`);
     
    const res = await request(app).get('/api/v1/tweets');
  
    expect(res.body).toEqual([{
      _id: expect.any(String),
      tweet: expect.any(String),
      tweetId: expect.any(String),
      user: expect.any(String),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      __v: 0
    },
    {
      _id: expect.any(String),
      tweet: expect.any(String),
      tweetId: expect.any(String),
      user: expect.any(String),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      __v: 0
    }]);
  });

  it('updates a tweet in the database', async () => {
    const tweetOne = '1407376767204085760';

    const postres = await request(app)
      .post(`/api/v1/tweets/${tweetOne}`);

    const updateres = await request(app)
      .put(`/api/v1/tweets/${postres.body._id}`)
      .send({ tweet: 'wait up!' });

    expect(updateres.body).toEqual({
      _id: expect.any(String),
      tweet: 'wait up!',
      user: '123276343',
      tweetId: tweetOne,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      __v: 0
    });
  });

  it('deletes a tweet in the database', async () => {
    const tweetOne = '1407376767204085760';

    const postres = await request(app)
      .post(`/api/v1/tweets/${tweetOne}`);

    console.log('this is from the post' + postres.body._id);

    return request(app)
      .delete(`/api/v1/tweets/${postres.body._id}`)
      .then((res) => {
        expect(res.body).toEqual(postres.body);
      })
      .then(() => request(app).get('/api/v1/tweets'))
      .then(res => {
        expect(res.body).toEqual([]);
      });
  });

});
