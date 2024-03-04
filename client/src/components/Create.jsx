import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../contexts/GlobalContext";
import axios from 'axios';

export const Create = () => {
    const { dispatch } = useContext(GlobalContext);

    const nav = useNavigate();

    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        bodyPart: "",
        day: "",
        rest: 0,
    });

    const [exercises, setExercises] = useState({
        exer1: { name: "", sets: 0, reps: 0 },
        exer2: { name: "", sets: 0, reps: 0 },
        exer3: { name: "", sets: 0, reps: 0 },
        exer4: { name: "", sets: 0, reps: 0 }
    });


    function handleChange(e) {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(formData)
    };

    function handleExercisesChange(e) {
        setExercises(prev => ({ ...prev, [e.target.name]: { ...exercises[e.target.name], name: e.target.value } }))
        console.log(exercises)
    }

    function handleSetChange(e) {
        setExercises(prev => ({ ...prev, [e.target.name]: { ...exercises[e.target.name], sets: e.target.value } }))
        console.log(exercises)
    }

    function handleRepChange(e) {
        setExercises(prev => ({ ...prev, [e.target.name]: { ...exercises[e.target.name], reps: e.target.value } }))
        console.log(exercises)
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const exerArray = Object.values(exercises);
        const filteredExer = exerArray.filter(ex => ex.name != "");

        const bodyPart = formData.bodyPart;
        const day = formData.day;
        const rest = formData.rest;


        const res = await axios.post("http://localhost:5000/workouts/create", { bodyPart, day, rest, exercises: filteredExer });

        if (!res.data.errors) {
            dispatch({ type: "ADD_WORKOUT", payload: { bodyPart, day, rest, exercises: filteredExer } })

            nav("/");
        } else {
           setError("Please fill out all necessary fields (at least 1 exercise)!")
        }
    };


    return (
        <div className="flex justify-center items-center gap-20 mt-14 font-mono">
            <h1 className="text-7xl italic text-green-300 underline">Fresh</h1>
            <div className="bg-green-300 border flex-col p-9 rounded-lg shadow-xl">
                <h1 className="text-2xl font-bold mb-4 text-center">Create a workout</h1>
                <form className="bg-green-300 flex-col space-y-3" onSubmit={handleSubmit}>
                    <div>
                        <label>Body part</label><br></br>
                        <input placeholder="Select part" name="bodyPart" onChange={handleChange} value={formData.bodyPart} className="border border-black rounded p-1"></input>
                    </div>
                    <div>
                        <label>Day of the week</label><br></br>
                        <input placeholder="Select day" className="border border-black rounded p-1" onChange={handleChange} value={formData.day} name="day"></input>
                    </div>
                    <div>
                        <label>Rest between sets</label><br></br>
                        <input placeholder="Select rest(minutes)" type="number" className="border border-black rounded p-1" onChange={handleChange} value={formData.rest} name="rest"></input>
                    </div>
                    <div>
                        <div className="bg-green-200 p-4 rounded mb-2 overflow-y-scroll h-60">
                            <div className="bg-green-100 rounded mb-2 p-2">
                                <label>Exercise 1</label><br></br>
                                <input className="border border-black rounded p-1" name="exer1" onChange={handleExercisesChange} value={exercises.exer1.name} type="text" placeholder="Exercise name"></input>
                                <div className="flex gap-2 justify-center mt-2 shadow-lg">
                                    <div>
                                        <label>Sets</label><br></br>
                                        <input className="w-28 p-2 rounded" name="exer1" onChange={handleSetChange} value={exercises.exer1.sets} type="number" placeholder="Sets"></input>
                                    </div>
                                    <div>
                                        <label>Reps/set</label><br></br>
                                        <input className="w-28 p-2 rounded" name="exer1" onChange={handleRepChange} value={exercises.exer1.reps} type="number" placeholder="Reps/set"></input>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-100 rounded mb-2 p-2">
                                <label>Exercise 2</label><br></br>
                                <input className="border border-black rounded p-1" name="exer2" onChange={handleExercisesChange} value={exercises.exer2.name} type="text" placeholder="Exercise name"></input>
                                <div className="flex gap-2 justify-center mt-2 shadow-lg">
                                    <div>
                                        <label>Sets</label><br></br>
                                        <input className="w-28 p-2 rounded" name="exer2" onChange={handleSetChange} value={exercises.exer2.sets} type="number" placeholder="Sets"></input>
                                    </div>
                                    <div>
                                        <label>Reps/set</label><br></br>
                                        <input className="w-28 p-2 rounded" name="exer2" onChange={handleRepChange} value={exercises.exer2.reps} type="number" placeholder="Reps/set"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-green-100 rounded mb-2 p-2">
                                <label>Exercise 3</label><br></br>
                                <input className="border border-black rounded p-1" name="exer3" onChange={handleExercisesChange} value={exercises.exer3.name} type="text" placeholder="Exercise name"></input>
                                <div className="flex gap-2 justify-center mt-2 shadow-lg">
                                    <div>
                                        <label>Sets</label><br></br>
                                        <input className="w-28 p-2 rounded" name="exer3" onChange={handleSetChange} value={exercises.exer3.sets} type="number" placeholder="Sets"></input>
                                    </div>
                                    <div>
                                        <label>Reps/set</label><br></br>
                                        <input className="w-28 p-2 rounded" name="exer3" onChange={handleRepChange} value={exercises.exer3.reps} type="number" placeholder="Reps/set"></input>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-100 rounded mb-2 p-2">
                                <label>Exercise 4</label><br></br>
                                <input className="border border-black rounded p-1" name="exer4" onChange={handleExercisesChange} value={exercises.exer4.name} type="text" placeholder="Exercise name"></input>
                                <div className="flex gap-2 justify-center mt-2 shadow-lg">
                                    <div>
                                        <label>Sets</label><br></br>
                                        <input className="w-28 p-2 rounded" name="exer4" onChange={handleSetChange} value={exercises.exer4.sets} type="number" placeholder="Sets"></input>
                                    </div>
                                    <div>
                                        <label>Reps/set</label><br></br>
                                        <input className="w-28 p-2 rounded" name="exer4" onChange={handleRepChange} value={exercises.exer4.reps} type="number" placeholder="Reps/set"></input>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <button className="border-black rounded-full bg-green-100 p-4  hover:bg-green-200 transition" type="submit">Create workout</button>
                    {error && <div className="text-red-400 text-center bg-red-100 rounded p-1 max-w-64">{error}</div>}
                </form>
            </div>
            <h1 className="text-7xl italic text-green-300 underline">Fresh</h1>
        </div>

    )
}