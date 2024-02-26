import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import axios from 'axios';

export const FoodForm = () => {

    const { state, dispatch } = useContext(GlobalContext);

    console.log(state)

    const [formData, setFormData] = useState({
        foodName: "",
        calories: 0,
        protein: 0,
        carbs: 0,
        fats: 0
    });

    const [error, setError] = useState("");

    function handleChange(e) {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const foodName = formData.foodName;
        const calories = formData.calories;
        const protein = formData.protein;
        const carbs = formData.carbs;
        const fats = formData.fats;

        if (foodName == "" || calories == 0) {
            return setError("Please enter the food name and calories!")
        };

        await axios.post("http://localhost:5000/foods/create", { foodName, calories, protein, carbs, fats })

        dispatch({
            type: "ADD_FOOD", payload: {
                foodName, calories, protein, carbs, fats
            }
        });

        setError("");

        setFormData({
            foodName: "",
            calories: 0,
            protein: 0,
            carbs: 0,
            fats: 0
        });

        console.log(state)
    }

    return (
        <div className="">
            <h2 className="sm:text-2xl lg:4xl mb-4 w=[50] font-mono italic">Calculate your calories for the day:</h2>
            <form onSubmit={handleSubmit} className="bg-green-300 p-3 rounded sm:flex gap-4 space-y-4 justify-center items-baseline w-fit shadow-lg font-mono">
                <div className="flex-col">
                    <div className="mb-2">
                        <label>Food product:</label><br></br>
                        <input type="text" placeholder="Product" name="foodName"
                            value={formData.foodName} onChange={handleChange} className="mt-1 p-1 rounded" />
                    </div>
                    <div>
                        <label>Calories:</label><br></br>
                        <input type="number" placeholder="Calories" name="calories"
                            value={formData.calories} onChange={handleChange} className="mt-1 p-1 rounded" />
                    </div>
                    <div>
                        <label>Protein:</label><br></br>
                        <input type="number" placeholder="Protein" name="protein"
                            value={formData.protein} onChange={handleChange} className="mt-1 p-1 rounded" />
                    </div>
                </div>

                <div className="flex-col">
                    <div>
                        <label>Carbs:</label><br></br>
                        <input type="number" placeholder="Carbs" name="carbs"
                            value={formData.carbs} onChange={handleChange} className="mt-1 p-1 rounded" />
                    </div>
                    <div>
                        <label>Fats:</label><br></br>
                        <input type="number" placeholder="Fats" name="fats"
                            value={formData.fats} onChange={handleChange} className="mt-1 p-1 rounded" />
                    </div>
                </div>


                <button type="submit" className="border-black rounded-full self-center bg-green-100 h-fit p-4 hover:bg-green-200 transition">Add product</button>
            </form>
            {error != "" && <div className="text-red-400">{error}</div>}
        </div>
    )

}