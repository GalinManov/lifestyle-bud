export const FoodForm = () => {

    return (
        <div className="">
            <h2 className="sm:text-2xl md:text-3xl lg:4xl mb-4 w=[50] font-mono italic">Calculate your calories for the day:</h2>
            <form className="bg-green-300 p-4 rounded flex-col justify-center w-fit shadow-lg font-mono">
                <div className="mb-2">
                    <label>Food product:</label><br></br>
                    <input type="text" placeholder="Product" className="mt-1 p-1 rounded" />
                </div>
                <div>
                    <label>Calories:</label><br></br>
                    <input type="text" placeholder="Calories" className="mt-1 p-1 rounded" />
                </div>
                <button type="submit" className="mt-4 border-black rounded-full bg-green-100 p-3 hover:bg-green-200 transition">Add product</button>
            </form>
        </div>
    )

}