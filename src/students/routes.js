const express = require("express");
const { getStudents, addStudent, getStudentById } = require("./controller");
const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudentById);
router.post("/", addStudent);

module.exports = router;
