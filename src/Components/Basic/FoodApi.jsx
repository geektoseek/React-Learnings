import React, { useState, useEffect } from "react";

const FoodApi = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchAll = async () => {
            const mealsArray = await Promise.all(
                Array.from({ length: 20 }).map(async () => {
                    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
                    const data = await res.json();
                    return data.meals[0];
                })
            );

            setFoods(mealsArray);
        };

        fetchAll();
    }, []);

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10">
            {foods.map((item) => (
                <div className="w-40 h-40">
                    <img className="w-full h-40 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" src={item.strMealThumb} alt={item.strMeal} />
                    <h3 className="text-xl leading-6">{item.strMeal}</h3>
                </div>
            ))}
        </section>
    );
};

export default FoodApi;
