const express = require("express");
const {
  getStudents,
  addStudent,
  getStudentById,
  removeStudent,
  updateStudent,
} = require("./controller");
const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudentById);
router.post("/", addStudent);
router.delete("/:id", removeStudent);
router.patch("/:id", updateStudent);

module.exports = router;
