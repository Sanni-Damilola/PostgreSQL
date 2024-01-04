const getStudentsQ = "SELECT * FROM students";
const queryStudentsById = "SELECT * FROM students WHERE id = $1";
const checkIfEmaiExist = "SELECT s FROM students WHERE s.email = $1";

module.exports = { getStudentsQ, queryStudentsById, checkIfEmaiExist };
