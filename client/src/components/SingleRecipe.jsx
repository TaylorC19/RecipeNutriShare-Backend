import React from "react";
import "./SingleRecipe.css";

function SingleRecipe(props) {
  const { singleRecipe, setIsDefaultView } = props;
  console.log(singleRecipe);
  return (
    <div className="contents">
      <h2>Title: {singleRecipe.title}</h2>
      <div className="nutrition-info">
      <p>servings:{singleRecipe.servings}</p>
        <p>Calories: {singleRecipe.total_calories}</p>
        <p>CookTime: {singleRecipe.hours ? singleRecipe.hours : 0} hour(s) and {singleRecipe.minutes? singleRecipe.minutes : 0} minute(s)</p>
        <p>Calories per serving: {singleRecipe.calories_per_serving}</p>
        <p>Protein per serving: {singleRecipe.total_protein / singleRecipe.servings}</p>
        <p>Carbohydrates per serving: {singleRecipe.total_carbohydrates / singleRecipe.servings}</p>
      </div>
      <div className="full-recipe">
        <div className="ingredients">
          <p>Ingredients</p>
          <ul>
          {singleRecipe.ingredients.map((ingredient) => {
            return <li className="single-ingredient">{ingredient.quantity} {ingredient.unit} {ingredient.name} ({ingredient.calories} calories)</li>
          })}
          </ul>
        </div>

        <div className="recipe-info">
          <p>{singleRecipe.description}</p>
          <p><strong>instructions</strong></p>
          {singleRecipe.instructions.split('\n').map((element) =>{ 
            return <p>{element}</p>
          })}
        </div>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          setIsDefaultView(true);
        }}
      >Back to all recipes</button>
    </div>
  );
}

export default SingleRecipe;
