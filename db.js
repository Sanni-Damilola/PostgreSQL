const importPool = require("pg").Pool;

const pool = new importPool({
  user: "postgress",
  host: "localhost",
  database: "students",
  password: "dennisfortune11",
  port: 2024,
});

module.exports = pool;
