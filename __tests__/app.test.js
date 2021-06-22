import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  
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
});
