const data = require("../../config/db");
const { getStudentsQ, queryStudentsById } = require("./queries");

const getStudents = (req, res) => {
  data.query(getStudentsQ, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};
const getStudentsById = (req, res) => {
  let { id } = req.params;
  id = Number(id);
  data.query(queryStudentsById, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addStudents = (req, res) => {
  const { name, email, age, dob } = req.body;
  
};

module.exports = { getStudents, getStudentsById, addStudents };
