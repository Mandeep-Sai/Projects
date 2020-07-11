const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentsRoutes = require("./students");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/students", studentsRoutes);
mongoose
  .connect("mongodb://localhost:27017/strive_community", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    server.listen(3007, () => {
      console.log("working on port 3007");
    })
  );
