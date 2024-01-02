const { Router } = require("express");
const { getStudents } = require("./controller");
const router = Router();

router.get("/", getStudents);

module.exports = router;
