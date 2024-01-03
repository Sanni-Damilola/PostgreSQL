const { Router } = require("express");
const { getStudents, getStudentsById } = require("./controller");
const router = Router();

router.get("/", getStudents);
router.get("/:id", getStudentsById);

module.exports = router;
