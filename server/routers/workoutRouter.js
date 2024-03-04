const express = require("express");
const WorkoutModel = require('../models/Workout');

const workoutRouter = express.Router();

workoutRouter.get("/all", async (req, res) => {
    try {
        const workouts = await WorkoutModel.find();
        res.json({ message: "Workouts retrieved!", data: workouts })
    } catch (err) {
        res.json(err)
    };

});

workoutRouter.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const workout = await WorkoutModel.findById(id);
        res.json({ message: "Workout retrieved!", workout })
    } catch (err) {
        res.json({errMsg: err})
    };
})

workoutRouter.post("/create", async (req, res) => {
    try {
        const { bodyPart, day, rest, exercises } = req.body;

        const workout = new WorkoutModel({ bodyPart, day, rest, exercises });

        await workout.save();

        res.json("Workout created!")
    } catch (err) {
        res.json(err)
    };
})

module.exports = workoutRouter;