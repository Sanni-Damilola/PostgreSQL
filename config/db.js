const keys = require("./keys");

const pool = require("pg").Pool;

const data = new pool({
  user: "postgres",
  host: "localhost",
  database: "students",
  password: keys.psqlPassword,
  port: 2024,
});

module.exports = data;
