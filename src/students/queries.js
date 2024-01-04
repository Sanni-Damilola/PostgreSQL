// queries.js
const SELECT_ALL_STUDENTS = "SELECT * FROM students";
const SELECT_STUDENT_BY_ID = "SELECT * FROM students WHERE id = $1";
const CHECK_EMAIL_EXISTENCE = "SELECT * FROM students WHERE email = $1";

module.exports = { SELECT_ALL_STUDENTS, SELECT_STUDENT_BY_ID, CHECK_EMAIL_EXISTENCE };

