// Libraries
import to from 'await-to-js';

// Database Connection
import initDBManager from './models/';
import { ERR_DB_CONNECTION } from './utils/constants';

// Utils
import Singleton from './utils/singleton';

export default async () => {
  Singleton.getInstance().dbManager = await getDbConnection();
};

export const getDbConnection = async () => {
  const [error, db] = await to(initDBManager());

  if (error) {
    throw new Error(`${ERR_DB_CONNECTION} ${error}`);
  }

  return db;
};
