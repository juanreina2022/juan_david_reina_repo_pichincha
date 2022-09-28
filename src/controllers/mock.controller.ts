// Libraries
import to from 'await-to-js';
import { RequestHandler } from 'express';

/**
 * Mock function for return a simulated data
 * @param req The request object from express
 * @param res The response object from express
 */
export const getMockService: RequestHandler = async (req, res) => {
  const mock = {
    repositories: [
      {
        id: 1,
        state: 604,
      },
      {
        id: 2,
        state: 605,
      },
      {
        id: 3,
        state: 606,
      },
    ],
  };

  return res.json(mock);
};
