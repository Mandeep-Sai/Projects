const express = require("express");
const studentModel = require("./schema");

const router = express.Router();

router.get("/", async (req, res) => {
  const students = await studentModel.find();
  res.send(students);
});

router.post("/", async (req, res) => {
  const student = new studentModel(req.body.data);
  student.save();
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
