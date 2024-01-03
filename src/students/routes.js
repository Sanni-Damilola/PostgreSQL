const express = require("express");
const { getStudents, addStudent, getStudentById, removeStudent } = require("./controller");
const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudentById);
router.post("/", addStudent);
router.delete("/:id", removeStudent);

module.exports = router;
