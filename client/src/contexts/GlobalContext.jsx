import { createContext } from "react";
import { useReducer, useEffect } from "react";
import axios from 'axios';

const initialState = {
    foods: [],
    workouts: []
};

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const rootReducer = (state, action) => {
        switch (action.type) {
            case "GET_FOOD": return state = { ...state, foods: action.payload };
            case "ADD_FOOD": return state = { ...state, foods: [...state.foods, action.payload] };
            case "GET_WORKOUTS": return state = { ...state, workouts: action.payload }
            case "ADD_WORKOUT": return state = { ...state, workouts: [...state.workouts, action.payload] };
            default:
                return state.foods
        }
    };

    const [state, dispatch] = useReducer(rootReducer, initialState);

    useEffect(() => {
        axios.get("http://localhost:5000/foods/all")
            .then(res => dispatch({ type: "GET_FOOD", payload: res.data.data }))

        axios.get("http://localhost:5000/workouts/all")
            .then(res => dispatch({ type: "GET_WORKOUTS", payload: res.data.data }))

    }, []);


    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )

}



