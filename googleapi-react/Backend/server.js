const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentsRoutes = require("./students");

const server = express();
const port = process.env.PORT;

server.use(cors());
server.use(express.json());

server.use("/students", studentsRoutes);

const uri =
  "mongodb+srv://user:user@test.hw7hj.mongodb.net/community?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    server.listen(port, () => {
      console.log(`working on port${port}`);
    })
  );
mongoose.connection.on("connected", () => {
  console.log("connected to atlas");
});
