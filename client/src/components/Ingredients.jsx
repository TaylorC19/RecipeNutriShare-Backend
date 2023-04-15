import React from "react";
import IngredientRow from "./IngredientRow";
import "./Ingredients.css"

function Ingredients(props) {
  const { ingredientsArr, setIngredientsArr } = props;

  const newIngredientHandler = (e) => {
    e.preventDefault();
    setIngredientsArr([...ingredientsArr, {name:'', quantity: '', unit: ''}])
  };

  return (
      <div className="ingredient-container">
        <div className="column-titles">
          <span>Ingredient</span>
          <span>quantity</span>
          <span>unit/measurement</span>
        </div>
        {ingredientsArr.map((row, index) => {
          return (<IngredientRow key={index} ingredientsArr={ingredientsArr} setIngredientsArr={setIngredientsArr} index={index} />)
        })}
      <button onClick={newIngredientHandler}>add one more ingredient</button>
      </div>
  );
}

export default Ingredients;
