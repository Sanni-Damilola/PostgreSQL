const data = require("../../config/db");
const {
  SELECT_ALL_STUDENTS,
  SELECT_STUDENT_BY_ID,
  CHECK_EMAIL_EXISTENCE,
  INSERT_QUERY,
  REMOVE_STUDENT,
  UPDATEQUERY,
} = require("./queries");

// Get all students
const getStudents = async (req, res) => {
  try {
    const result = await data.query(SELECT_ALL_STUDENTS);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Get student by ID
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await data.query(SELECT_STUDENT_BY_ID, [Number(id)]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Add a new student
const addStudent = async (req, res) => {
  try {
    const { name, email, age, dob } = req.body;

    // Check if email exists
    const emailExistenceResult = await data.query(CHECK_EMAIL_EXISTENCE, [
      email,
    ]);

    if (emailExistenceResult.rows.length) {
      return res.status(400).send("Email Already Exists");
    }

    await data.query(INSERT_QUERY, [name, email, age, dob]);

    return res.status(201).send("Student added successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

// Remove student
const removeStudent = async (req, res) => {
  try {
    const { id } = req.params;

    // Execute the query to remove the student by ID
    const result = await data.query(REMOVE_STUDENT, [id]);

    // Check if a student was removed
    if (result.rowCount === 0) {
      return res.status(404).send(`Student with ID (${id}) not found`);
    }

    return res.status(200).send(`Student with ID (${id}) removed successfully`);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

// Update student
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age, dob } = req.body;

    // Check if the student exists
    const checkExistenceResult = await data.query(SELECT_STUDENT_BY_ID, [id]);

    if (!checkExistenceResult.rows.length) {
      return res.status(404).send(`Student with ID (${id}) not found`);
    }

    // Update the student's information
    await data.query(UPDATEQUERY, [name, email, age, dob, id]);

    return res.status(200).send(`Student with ID (${id}) updated successfully`);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
};
