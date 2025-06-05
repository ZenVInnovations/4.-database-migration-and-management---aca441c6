const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sourceDb = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const targetDb = new Sequelize(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
  }
);

async function migrateData() {
  try {
    const [rows] = await sourceDb.query('SELECT * FROM Users');
    const User = targetDb.define('User', {}, { tableName: 'Users' });
    await targetDb.sync();
    const batchSize = 1000;
    for (let i = 0; i < rows.length; i += batchSize) {
      const batch = rows.slice(i, i + batchSize);
      await User.bulkCreate(batch.map(row => ({
        id: row.id,
        name: row.name,
        email: row.email,
        createdAt: row.created_at,
      })));
    }
    console.log('Data migration completed');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrateData();