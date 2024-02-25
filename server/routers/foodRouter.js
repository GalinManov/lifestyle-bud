const express = require("express");
const FoodModel = require('../models/Food');

const foodRouter = express.Router();

foodRouter.get("/all", async(req, res) => {
    const foods = await FoodModel.find(); 

    res.json({message: "All foods retrieved!", data: foods})
});

foodRouter.post("/create", async(req, res) => {
    const {foodName, calories, protein, carbs, fats} = req.body;

    const food = new FoodModel(foodName, calories, protein, carbs, fats);

    await food.save();

    res.json({message: "New food created!"})
})

module.exports = foodRouter;