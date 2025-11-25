import React, { useState, useEffect } from "react";

const DataFetching = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function getMeals() {
            const requests = [];

            // Fetch 10 random meals
            for (let i = 0; i < 10; i++) {
                requests.push(
                    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((r) =>
                        r.json()
                    )
                );
            }

            const results = await Promise.all(requests);

            const finalMeals = results.map((res) => res.meals[0]);
            setMeals(finalMeals);
        }

        getMeals();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                🍽️ Random Food Recipes
            </h1>

            {/* GRID: 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {meals.map((meal) => {
                    // Collect ingredients dynamically
                    const ingredients = [];
                    for (let i = 1; i <= 20; i++) {
                        const ing = meal[`strIngredient${i}`];
                        const measure = meal[`strMeasure${i}`];
                        if (ing && ing.trim() !== "") {
                            ingredients.push(`${ing} - ${measure}`);
                        }
                    }

                    return (
                        <div
                            key={meal.idMeal}
                            className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-xl transition"
                        >
                            {/* IMAGE */}
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className="w-full h-48 object-cover"
                            />

                            {/* CONTENT */}
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">{meal.strMeal}</h2>

                                <h3 className="font-semibold mb-1">Ingredients:</h3>
                                <ul className="text-sm list-disc ml-5 mb-3">
                                    {ingredients.slice(0, 5).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                {/* Instructions Toggle */}
                                <details className="cursor-pointer">
                                    <summary className="font-semibold text-blue-600 hover:underline">
                                        View Instructions
                                    </summary>
                                    <p className="text-sm mt-2">{meal.strInstructions}</p>
                                </details>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DataFetching;
