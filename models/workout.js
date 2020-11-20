const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    // make date by default
    default: () => new Date()
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "exercise"
    }
  ]
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
