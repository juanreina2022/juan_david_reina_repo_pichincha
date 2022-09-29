// Libraries
import to from 'await-to-js';
import { RequestHandler } from 'express';

// Utils
import {
  ERR_GETTING_ALL_TRIBES,
  INFO_FIND_0_TRIBES,
  INFO_FIND_ALL_TRIBES,
} from '../utils/constants';
import Singleton from '../utils/singleton';

/**
 * Function for get all the tribes
 * @param req The request object from the route
 * @param res The response for the route
 */
export const getTribes: RequestHandler = async (req, res) => {
  const dbManager = Singleton.getInstance().dbManager;

  const [error, result] = await to<{ rows: ITribe[], count: number }>(dbManager.tribe.findAndCountAll());

  if (error) {
    throw new Error(JSON.stringify(`${ERR_GETTING_ALL_TRIBES}` + error));
  }

  if (!result || result.rows.length <= 0) {
    return res.json({
      message: INFO_FIND_0_TRIBES,
      result,
      success: false,
      totalRecords: result.count,
    });
  }

  return res.json({
    message: INFO_FIND_ALL_TRIBES,
    result: result.rows,
    success: true,
    totalRecords: result.count,
  });
};
