const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const foodRouter = require('./routers/foodRouter');
const workoutRouter = require('./routers/workoutRouter')
const userRouter = require("./routers/userRouter")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/foods", foodRouter);
app.use("/workouts", workoutRouter);


mongoose.connect('mongodb://127.0.0.1:27017/lifestyle-bud')
    .then(console.log("Successfully connected to DB!"))

app.listen(5000, () => console.log("Server running..."));