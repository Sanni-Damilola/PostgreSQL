const importPool = require("pg").Pool;
const keys = require("./config/keys");

const pool = new importPool({
  user: "postgress",
  host: "localhost",
  database: "students",
  password: keys?.psqlPassword,
  port: 2024,
});

module.exports = pool;