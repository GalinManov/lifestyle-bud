export const WorkoutCard = ({workout}) => {
    return (
        <div className="flex justify-between space-x-5 bg-green-300 
        rounded p-4 h-28 shadow-lg hover:scale-105 transition-all hover:cursor-pointer">
            <div>
                <h1 className="text-2xl mb-2">{workout.day}</h1>
                <p>{workout.bodyPart}</p>
            </div>
            <div>
                <p>Rest: {workout.rest} minutes between sets</p>
            </div>
        </div>
    )
}