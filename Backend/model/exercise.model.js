const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  duration: { type: String },
  date: { type: String },
  Activitytype: { type: String }
});

module.exports = mongoose.model("exercise", Schema);
