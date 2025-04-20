import axios from "axios";
import React, { useEffect, useState } from "react";

const Meal = () => {
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => {
        setMeal(response.data.meals);
      });
  }, []);
  const mealCard = {
    borderRadius: "5px",
    padding: "20px 0px",
    margin: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };
  const mealsData = meal.map(({ idMeal, strMeal, strMealThumb }) => {
    return (
      <div key={idMeal} style={mealCard}>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            margin: "10px 0",
            width: "100%",
            textAlign: "center",
          }}
        >
          {strMeal}
        </p>
        <img src={strMealThumb} alt={strMeal} style={{ width: "250px" }} />
      </div>
    );
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        height: "100vh",
      }}
    >
      {mealsData}
    </div>
  );
};

export default Meal;
