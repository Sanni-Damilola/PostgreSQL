const keys = require("./keys");

const pool = require("pg").Pool;

const data = new pool({
  user: "postgres",
  host: "localhost",
  password: keys.psqlPassword,
  port: 2024,
  database: "postgres"
});

module.exports = data;
