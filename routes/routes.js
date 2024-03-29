const { Router } = require("express");
const {
  getStudents,
  addStudent,
  getStudentById,
  removeStudent,
  updateStudent,
} = require("../controllers/controller");
const router = Router();

router.get("/", getStudents);
router.get("/:id", getStudentById);
router.post("/", addStudent);
router.delete("/:id", removeStudent);
router.patch("/:id", updateStudent);

module.exports = router;
