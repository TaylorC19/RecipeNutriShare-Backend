import React, { useState } from "react";
import IngredientRow from "./IngredientRow";

function Ingredients() {
  const [ingredientArr, setIngredientsArr] = useState([
    <IngredientRow />
  ]);

  const newIngredientHandler = (e) => {
    e.preventDefault();
    setIngredientsArr([...ingredientArr, <IngredientRow />])
  };

  return (
    <div>
      <form id="ingredients" action="">
        {ingredientArr.map((row, index) => {
          return row
        })}
      </form>
      <button onClick={newIngredientHandler}>add one more ingredient</button>
    </div>
  );
}

export default Ingredients;
