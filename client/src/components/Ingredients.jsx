import React from "react";
import IngredientRow from "./IngredientRow";

function Ingredients(props) {
  const { ingredientsArr, setIngredientsArr } = props;

  const newIngredientHandler = (e) => {
    e.preventDefault();
    setIngredientsArr([...ingredientsArr, {name:'', quantity: '', unit: ''}])
  };

  return (
    <div>
      <div className="ingredient-container">
        {ingredientsArr.map((row, index) => {
          return (<IngredientRow key={index} ingredientsArr={ingredientsArr} setIngredientsArr={setIngredientsArr} index={index} />)
        })}
      <button onClick={newIngredientHandler}>add one more ingredient</button>
      </div>
    </div>
  );
}

export default Ingredients;
