const getStudentsQ = "SELECT * FROM students";
const queryStudentsById = "SELECT * FROM students WHERE id = $1";

module.exports = { getStudentsQ, queryStudentsById };
