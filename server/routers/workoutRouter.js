const express = require("express");
const WorkoutModel = require('../models/Workout');

const workoutRouter = express.Router();

workoutRouter.get("/all", async (req, res) => {
    const workouts = await WorkoutModel.find();
    res.json({ message: "Workouts retrieved!", data: workouts })
});

workoutRouter.post("/create", async (req, res) => {
    const { bodyPart, day, rest, exercises } = req.body;

    const workout = new WorkoutModel({ bodyPart, day, rest, exercises });

    await workout.save();
    res.json("Workout created!")
})

module.exports = workoutRouter;