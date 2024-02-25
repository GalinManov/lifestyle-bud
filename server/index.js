const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const foodRouter = require('./routers/foodRouter');
const userRouter = require("./routers/userRouter")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/foods", foodRouter);

app.listen(5000, () => console.log("Server running..."));