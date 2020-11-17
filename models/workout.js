const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    unique: true
  },
  exercises: [
    {
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
      ref: "exercise"
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
