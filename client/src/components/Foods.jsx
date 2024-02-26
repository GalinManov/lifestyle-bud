import { useState, useContext } from "react";
import { FoodCard } from "./FoodCard";
import { GlobalContext } from "../contexts/GlobalContext";
import axios from 'axios';

export const Foods = ({ }) => {

    const { state, dispatch } = useContext(GlobalContext);

    return (
        <>
            <h2 className="mt-32 mb-4 text-2xl font-bold font-mono italic">Your foods for the day:</h2>
            <div className="grid gap-4 grid-flow-col auto-cols-[50%] 
            sm:auto-cols-[12%] md:auto-cols-[20%] lg:auto-cols-[20%] xl:auto-cols-[20%] 2xl:auto-cols-[15%] overflow-x-auto">
               {state.foods.map(f => <FoodCard key={f._id} food={{...f}} />)}
            </div>
        </>
    )
}