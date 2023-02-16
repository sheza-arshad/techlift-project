const express = require("express");

const app = express();
const Schema = require("./model/exercise.model");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.listen(4000, () => {
  console.log("port connected");
});
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/Exercisedatabase", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Db connected");
  });

app.use(express.json());
app.use(bodyParser.json());

app.post("/exer", async (req, res) => {
  try {
    const exercises = await Schema(req.body);
    exercises.save();
    res.send(exercises);
  } catch (error) {
    console.log(error);
  }
});

app.get("/exer", async (req, res) => {
  const exercises = await Schema.find();
  res.json(exercises);
});
app.get("/exer/:id", async (req, res) => {
  const exercises = await Schema.findById(req.params.id);
  res.json(exercises);
});

app.delete("/exer/:id", async (req, res) => {
  const exercises = await Schema.findByIdAndDelete(req.params.id);
  res.send(exercises);
});

app.put("/exer/:id", async (req, res) => {
  const exercises = await Schema.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  });
  res.json(exercises);
});
