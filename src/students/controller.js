const data = require("../../config/db");
const { getStudentsQ } = require("./queries");

const getStudents = (req, res) => {
  data.query(getStudentsQ, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

module.exports = { getStudents };
