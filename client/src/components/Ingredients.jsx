import React, { useState } from "react";
import IngredientRow from "./IngredientRow";

function Ingredients() {
  const [ingredientArr, setIngredientsArr] = useState([
    'element0'
  ]);

  const newIngredientHandler = (e) => {
    e.preventDefault();
    setIngredientsArr([...ingredientArr, `element${ingredientArr.length}`])
  };

  return (
    <div>
      <form id="ingredients" action="">
        {ingredientArr.map((row, index) => {
          return (<IngredientRow key={index} />)
        })}
      <button onClick={newIngredientHandler}>add one more ingredient</button>
      <button onClick={(e) => {
        e.preventDefault();
        console.log(e.target.form);
      }} type="submit">Submit recipes</button>
      </form>
    </div>
  );
}

export default Ingredients;
