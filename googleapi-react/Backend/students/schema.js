const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  name: String,
  striveId: String,
  email: String,
  linkedInUrl: String,
  lat: Number,
  lng: Number,
  address: String,
  address2: String,
  city: String,
  state: String,
  zip: Number,
});
const studentModel = model("student", studentSchema);

module.exports = studentModel;
