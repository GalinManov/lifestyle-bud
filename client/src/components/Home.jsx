import { Foods } from "./Foods"
import { FoodForm } from "./FoodForm"
import { Workouts } from "./Workouts"



export const Home = () => {
    return (
        <section className="p-10 mt-8">

            <div className="gap-20 sm:flex">
                <Workouts />
                <FoodForm />   
            </div>

            <Foods />

        </section>
    )
}