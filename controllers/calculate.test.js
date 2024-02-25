const request = require('supertest');
const app = require('../../app'); // Adjust this path to your Express app

const request = require('supertest');
const app = require('../../app'); // Ensure this path is correct

describe('POST /calculate', () => {
  it('should perform addition', async () => {
    const response = await request(app)
      .post('/calculate')
      .set('operation', 'add') // Make sure this aligns with your server's expectations
      .send({ num1: 10, num2: 5 });

    if (response.statusCode !== 200) {
      console.log(response.body); // Debugging line to see server response
    }

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('result');
    expect(response.body.result).toBe(15); // Adjust based on the operation
  });
});
