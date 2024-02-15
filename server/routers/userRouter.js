const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.json("Home info retrieved!")
});

module.exports = userRouter;

