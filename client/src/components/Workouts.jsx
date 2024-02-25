export const Workouts = () => {
    return (
        <div className="sm:w-1/3 md:w-1/2 lg:w-3/3 flex-col space-y-4 font-mono">

                    <div className="flex justify-between space-x-5 bg-green-300 
                    rounded p-4 h-28 shadow-lg hover:scale-105 transition-all hover:cursor-pointer">
                        <div>
                            <h1 className="text-2xl mb-2">Tuesday</h1>
                            <p>Chest and triceps</p>
                        </div>
                        <div>
                            <p>Duration: 1h 30 min</p>
                        </div>
                    </div>

                    <div className="flex justify-between bg-green-300  
                        rounded p-4 h-28 shadow-lg hover:scale-105 transition-all hover:cursor-pointer">
                        <div>
                            <h1 className="text-2xl mb-2">Tuesday</h1>
                            <p>Chest and triceps</p>
                        </div>
                        <div>
                            <p>Duration: 1h 30 min</p>
                        </div>

                    </div>
                </div>
    )
}