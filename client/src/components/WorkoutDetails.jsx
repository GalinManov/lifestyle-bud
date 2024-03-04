import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const WorkoutDetails = () => {
    const id = useParams();

    const [workout, setWorkout] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/workouts/details/${id.id}`)
            .then(res => setWorkout(res.data.workout));
    }, []);

    return (
        <div className='flex justify-center items-center mt-8'>
            <div className='bg-green-200 p-8 rounded-md shadow-lg flex-col space-y-4'>
                <h1 className='text-2xl font-bold'>Workout Details</h1>
                <p>Body part: {workout?.bodyPart}</p>
                <p>Day: {workout?.day}</p>
                <p><p>Rest between sets: {workout?.rest} minutes</p></p>
                <h2 className='text-lg font-bold'>Exercises</h2>
                <ul className='flex-col space-y-2'>
                    {workout?.exercises?.map(ex =>
                        <li>
                            <p className='font-bold'>{ex.name}</p>
                            <p>Sets: {ex.sets}</p>
                            <p>Reps: {ex.reps}</p>
                        </li>)}
                </ul>
            </div>
        </div>
    )
}