import { createContext } from "react";
import { useReducer, useEffect } from "react";
import axios from 'axios';

const initialState = {
    foods: [],
    workouts: []
};

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const foodReducer = (state, action) => {
        switch (action.type) {
            case "GET_FOOD": return state = { ...state, foods: action.payload };
            case "ADD_FOOD": return state = { ...state, foods: [...state.foods, action.payload] };
            default:
                return state.foods
        }
    };

    const [state, dispatch] = useReducer(foodReducer, initialState);

    useEffect(() => {
        axios.get("http://localhost:5000/foods/all")
            .then(res => dispatch({ type: "GET_FOOD", payload: res.data.data}))
    }, []);


    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )

}



