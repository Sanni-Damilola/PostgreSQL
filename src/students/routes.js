const { Router } = require("express");
const { getStudents } = require("./controller");
const router = Router();

router.get("/", getStudents);
router.get("/:id", getStudents);

module.exports = router;
