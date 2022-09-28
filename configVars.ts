/**
* Initial values of environment variables
*/
const PAGE_SIZE: string | number = process.env.PAGE_SIZE || 10;
const PPUP1_DB_HOST: string = process.env.PPUP1_DB_HOST || 'localhost';
const PPUP1_DB_NAME: string = process.env.PPUP1_DB_NAME || 'pichincha_nodejs';
const PPUP1_DB_PASSWORD: string = process.env.PPUP1_DB_PASSWORD || 'root';
const PPUP1_DB_USER: string = process.env.PPUP1_DB_USER || 'root';
const PPUP1_DB_PORT: string | number = process.env.PPUP1_DB_PORT || 3306;
const POOL_MAX: string | number = process.env.POOL_MAX || 5;
const POOL_MIN: string | number = process.env.POOL_MIN || 0;
const PORT: string | number = process.env.PORT || 3000;
const NODE_ENV: string = process.env.NODE_ENV || 'development';

export {
  PAGE_SIZE,
  PPUP1_DB_HOST,
  PPUP1_DB_NAME,
  PPUP1_DB_PASSWORD,
  PPUP1_DB_USER,
  PPUP1_DB_PORT,
  POOL_MAX,
  POOL_MIN,
  PORT,
  NODE_ENV,
};
