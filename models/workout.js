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
  ] // DO I ADD properties when data requested?
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
