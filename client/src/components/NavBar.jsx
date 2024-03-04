import { GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";

export const NavBar = () => {

    const { state } = useContext(GlobalContext);
    let totalCal = 0;

    state.foods.forEach(food => totalCal += parseInt(food.calories));


    return (
        <div className="bg-green-400 flex justify-center align-center py-5 shadow-xl">
            <ul className="flex gap-9 text-black text-lg sm:text-2xl ">
                <li className="hover:text-white transition-all">
                    <a className="" href="/">Home</a>
                </li>
                <li className="hover:text-white transition-all">
                    <a href="/create">Create workout</a>
                </li>
                <li className="ml-16">
                    <p>Calories for the day: {totalCal}</p>
                </li>
            </ul>
        </div>
    )
}