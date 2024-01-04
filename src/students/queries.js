// queries.js
const SELECT_ALL_STUDENTS = "SELECT * FROM students";
const SELECT_STUDENT_BY_ID = "SELECT * FROM students WHERE id = $1";
const CHECK_EMAIL_EXISTENCE = "SELECT * FROM students WHERE email = $1";
const INSERT_QUERY = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";


module.exports = { SELECT_ALL_STUDENTS, SELECT_STUDENT_BY_ID, CHECK_EMAIL_EXISTENCE, INSERT_QUERY };

