// DEPENDENCIES
const express = require("express")
const app = express.Router()

// workout constructor
const Workout = require("../models/Workout.js");

// CREATE workout
app.post("/api/workouts", (req, res) => {
    // pass body to mongoose create method
    Workout.create({})
        // send it as success message
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            // send error if exists
            res.json(err)
        })
})

// UPDATE workout w/ specific id
app.put("/api/workouts/:id", (req, res) => {
    // update making sure requirements are met
    Workout.findByIdAndUpdate(
        req.params.id,
        {$push: {exercises: req.body}},
        {new: true, runValidators: true}
    )
        .then(dbWorkout => {
            // send it as a success message
            res.json(dbWorkout);
        })
        .catch(err => {
            // send error if exists
            res.json(err);
        })
})

// GET workouts
app.get("/api/workouts", (req, res) => {
    // find all workouts
    Workout.find()
        .then(dbWorkouts => {
            // send them back
            res.json(dbWorkouts);
        })
        .catch(err => {
            // send error if exists
            res.json(err);
        });
});


module.exports = app;