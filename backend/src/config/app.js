const express = require('express');
const { Sequelize } = require('sequelize');
const User = require('./models/User');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);
require('dotenv').config();

const app = express();
const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
  }
);

app.use(express.json());

app.get('/api/migration-status', async (req, res) => {
  try {
    const count = await User.count();
    res.json({ usersMigrated: count, progress: count > 0 ? 100 : 0 });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch migration status' });
  }
});

app.post('/api/backup', async (req, res) => {
  try {
    await execPromise(`pg_dump -U ${process.env.POSTGRES_USER} -h ${process.env.POSTGRES_HOST} ${process.env.POSTGRES_DATABASE} > /backups/backup.sql`);
    res.json({ status: 'Backup completed' });
  } catch (error) {
    res.status(500).json({ error: 'Backup failed' });
  }
});

app.listen(8000, async () => {
  console.log('Backend running on port 8000');
  await sequelize.authenticate();
  console.log('Database connected');
});