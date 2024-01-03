const getStudentsQ = "SELECT * FROM students";
const getStudentsById = "SELECT * FROM students WHERE id = $1";

module.exports = { getStudentsQ, getStudentsById };
