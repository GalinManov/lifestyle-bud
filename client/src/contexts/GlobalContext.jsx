import { createContext } from "react";
import { useReducer } from "react";

const initialState = {
    foods: [],
    workouts: "xddd"
};

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const foodReducer = (state, action) => {
        switch (action.type) {
            case "GET_FOOD": state = { ...state, foods: action.payload };
            case "ADD_FOOD": state = { ...state, foods: [...state.foods, action.payload] };
            default:
                return state.foods
        }
    };


    const [state, dispatch] = useReducer(foodReducer, initialState);


    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )

}



