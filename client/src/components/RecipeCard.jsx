import React from 'react';
import "./RecipeCard.css"

function RecipeCard(props) {
  const { title, servings, hours, minutes, calories, description } = props;
  return (
    <div className='recipe-card'>
      <h2>{title}</h2>
      <p>servings:{servings}</p>
      <p>CookTime {hours}:{minutes}</p>
      <p>Calories per serving: {calories}</p>
      <p>{description}</p>
    </div>
  )
}

export default RecipeCard