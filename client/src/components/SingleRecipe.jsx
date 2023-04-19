import React from "react";

function SingleRecipe(props) {
  const { singleRecipe, setIsDefaultView } = props;
  console.log(singleRecipe);
  return (
    <div>
      <h2>{singleRecipe.title}</h2>
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
