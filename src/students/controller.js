const data = require("../../config/db");
const { getStudentsQ, queryStudentsById } = require("./queries");

const getStudents = (req, res) => {
  data.query(getStudentsQ, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};
const getStudentsById = (req, res) => {
  const { id } = req.params;
  id = Number(id);
  console.log("here", typeof id);
  data.query(queryStudentsById, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

module.exports = { getStudents, getStudentsById };
