const { Pool } = require('pg');

const pool = new Pool ({
  user: "jobify",
  host: "db-1-instance-1.cbd2bkfljrvj.us-east-2.rds.amazonaws.com",
  port: 5432,
  password: 'jobify123',
  database: 'postgres'
});

module.exports = pool;