const { Router } = require("express");
const { getStudents, getStudentsById, addStudents } = require("./controller");
const router = Router();

router.get("/", getStudents);
router.get("/:id", getStudentsById);
router.post("/", addStudents);

module.exports = router;
