require('dotenv').config();

const options = {
  username: process.env.DB_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.DB_NAME || 'cashforce_v3',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3307 || 3002,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: options,
};
