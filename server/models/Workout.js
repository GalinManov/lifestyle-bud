const mongoose = require("mongoose");

const Workoutchema = new mongoose.Schema({
    bodyPart: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    rest:{
        type: Number,
        required: true
    },
    exercises: []
});

const WorkoutModel = mongoose.model("Workouts", Workoutchema);

module.exports = WorkoutModel;