const data = require("../../config/db");

const getStudents = (req, res) => {
  data.query("SELECT * FROM students", (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

module.exports = { getStudents };
