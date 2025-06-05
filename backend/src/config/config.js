require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_DB_USER,
    password: process.env.POSTGRES_DB_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
    host: process.env.POSTGRES_DB_HOST,
    dialect: 'postgres',
  },
  mysql: {
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    host: process.env.MYSQL_DB_HOST,
    dialect: 'mysql',
  }
};
