import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { WorkoutCard } from "./WorkoutCard";

export const Workouts = () => {
    const { state } = useContext(GlobalContext);

    return (
        <div className="sm:w-1/3 md:w-1/2 lg:w-3/3 flex-col space-y-4 font-mono">
            <h2 className="mb-4 text-2xl font-bold font-mono italic">Your workouts:</h2>
            {state.workouts.map(w => <WorkoutCard key={w._id} workout={{...w}} /> )}



        </div>
    )
}