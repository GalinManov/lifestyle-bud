export const Home = () => {
    return (
        <section className="mt-8 p-10 gap-20 sm:flex">

            <div className="sm:w-1/3 md:w-1/2 lg:w-3/3 flex-col space-y-4">

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


            <div className="">
                <h2 className="sm:text-2xl md:text-3xl lg:4xl mb-4 w=[50]">Calculate your calories for the day:</h2>
                <form className="bg-green-300 p-4 rounded flex-col justify-center w-fit shadow-lg">
                    <div className="mb-2">
                        <label>Food product:</label><br></br>
                        <input type="text" placeholder="Product" className="mt-1 p-1 rounded" />
                    </div>
                    <div>
                        <label>Calories:</label><br></br>
                        <input type="text" placeholder="Calories" className="mt-1 p-1 rounded" />
                    </div>
                    <button type="submit" className="bg-blue-400 p-2 rounded mt-4 hover:bg-blue-300 transition">Add product</button>
                </form>
            </div>


        </section>
    )
}