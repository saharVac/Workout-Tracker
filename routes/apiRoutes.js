// DEPENDENCIES
const express = require("express")
const app = express.Router()

// workout constructor
const Workout = require("../models/workout.js");

// WORKOUTS CRUD

// CREATE workout
app.post("/api/workouts/", (req, res) => {

    // pass body to mongoose create method
    Workout.create(req.body)
        // send it as success message
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            // send error if exists
            res.json(err)
        })
})

// READ workouts
app.get("/api/workouts", (req, res) => {
    // find all workouts
    Workout.find()
        .then(workouts => {
            // send them back
            res.json(workouts);
        })
        .catch(err => {
            // send error if exists
            res.json(err);
        });
});

// READ workouts w/in range
app.get("/api/workouts/range", (req, res) => {
    // find range of workouts
    Workout.find({}).limit(5)
        .then(workouts => {
            // send them back
            res.json(workouts)
        })
        .catch(err => {
            // send error if exists
            res.json(err);
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
            console.log(dbWorkout)
            // send it as a success message
            res.json(dbWorkout);
        })
        .catch(err => {
            // send error if exists
            res.json(err);
        })
})

// DELETE workouts
app.delete("/api/workouts", (req, res) => {
    // delete by id passed in body
    Workout.findByIdAndDelete(req.body.id)
        .then(() => {
            // notify if successful
            res.json(true)
        })
        .catch(err => {
            // send error if exists
            res.json(err)
        })
})

module.exports = app;