import React from 'react';
import "./RecipeCard.css"

function RecipeCard(props) {
  const { recipeInfo, setSingleRecipe, index, setIsDefaultView } = props;
  return (
    <div className='recipe-card'>
      <h2>{recipeInfo.title}</h2>
      <div className='info-rows'>
        <p>Servings:{recipeInfo.servings}</p>
        <p>CookTime: {recipeInfo.hours ? recipeInfo.hours : 0} hour(s) and {recipeInfo.minutes? recipeInfo.minutes : 0} minute(s)</p>
        <p>Calories per serving: {recipeInfo.calories_per_serving}</p>
        <p>Protein per serving: {recipeInfo.total_protein / recipeInfo.servings}</p>
        <p>Carbohydrates per serving: {recipeInfo.total_carbohydrates / recipeInfo.servings}</p>

      </div>
      <p>Description: {recipeInfo.description}</p>

      <button onClick={(e) => {
        e.preventDefault();
        setSingleRecipe(recipeInfo);
        setIsDefaultView(false);
      }}>More info</button>
    </div>
  )
}

export default RecipeCard