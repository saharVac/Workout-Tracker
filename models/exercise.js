const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter exercise type"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter exercise name"
  },
  duration: {
    type: Number,
    required: "Enter duration"
  },
  weight: {
    type: Number
  },
  reps: {
    type: Number
  },
  sets: {
    type: Number
  },
  distance: {
    type: Number
  }
});

// defining model to export
const Exercise = mongoose.model("exercise", ExerciseSchema);

module.exports = Exercise;
