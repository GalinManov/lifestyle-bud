import { useState } from "react"

export const Create = () => {

    const [exercises, setExercises] = useState([1, 2]);
    const [error, setError] = useState(null);


    function handleAddExercise(e) {
        e.preventDefault();

        if (exercises.length > 12) {
            return setError("Cannot add more than 12 exercises per workout!")
        };

        setExercises(prev => [...prev, prev.length])

        console.log(exercises)
    }

    function handleSubmit() {

    }

    console.log(exercises)


    return (
        <div className="flex justify-center items-center gap-20 mt-14 font-mono">
            <h1 className="text-7xl italic text-green-300 underline">Fresh</h1>
            <div className="bg-green-300 border flex-col p-9 rounded-lg shadow-xl">
                <h1 className="text-2xl font-bold mb-4 text-center">Create a workout</h1>
                <form className="bg-green-300 flex-col space-y-3">
                    <div>
                        <label>Body part</label><br></br>
                        <input placeholder="Select part" className="border border-black rounded p-1"></input>
                    </div>
                    <div>
                        <label>Day of the week</label><br></br>
                        <input className="border border-black rounded p-1"></input>
                    </div>
                    <div>
                        <label>Rest between sets</label><br></br>
                        <input className="border border-black rounded p-1"></input>
                    </div>
                    <div>
                        <div className="bg-green-200 p-4 rounded mb-2 overflow-y-scroll h-60">

                            {exercises?.map((ex) =>
                                <div key={ex} className="bg-green-100 rounded mb-2 p-2">
                                    <label>Exercise {ex}</label><br></br>
                                    <input className="border border-black rounded p-1" placeholder="Exercise name"></input>
                                    <div className="flex gap-2 justify-center mt-2 shadow-lg">
                                        <div>
                                            <label>Sets</label><br></br>
                                            <input className="w-28 p-2 rounded" type="number" placeholder="Sets"></input>
                                        </div>
                                        <div>
                                            <label>Reps/set</label><br></br>
                                            <input className="w-28 p-2 rounded" type="number" placeholder="Reps/set"></input>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                        <button onClick={handleAddExercise} className="text-lg font-bold rounded-full border bg-gray-200 p-1 
                        hover:bg-gray-100">+</button>
                    </div>

                    <button className="border-black rounded-full bg-green-100 p-4  hover:bg-green-200 transition">Create workout</button>
                    {error && <div className="text-red-400 text-center bg-red-100 rounded p-1 max-w-64">{error}</div>}
                </form>
            </div>
            <h1 className="text-7xl italic text-green-300 underline">Fresh</h1>
        </div>

    )
}