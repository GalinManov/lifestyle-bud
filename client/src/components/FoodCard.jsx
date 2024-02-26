export const FoodCard = ({ food }) => {


    return (
        <div className="p-4 bg-green-300 rounded-lg flex flex-col justify-center items-center shadow font-mono">
            <div className="flex-col">
                <p className="text-2xl font-bold mb-4">Name: {food.foodName}</p>
                <p>Calories: {food.calories} kJ</p>
                <p>Protein: {food.protein}g</p>
                <p>Carbs: {food.carbs}g</p>
                <p>Fats: {food.fats}g</p>
            </div>

        </div>

    )
}