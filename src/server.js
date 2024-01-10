const express = require("express");
const router = require("../routes/routes");

const app = express();
const port = 2023;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/v1/students", router);

app.listen(port, () => {
  console.log("app listening on", port);
});
