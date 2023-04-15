import React, { useState } from 'react';
import Header from '../components/Header'
import Ingredients from '../components/Ingredients';


const NewRecipe = () => {
  const [ingredientsArr, setIngredientsArr] = useState([{name:'', quantity: 0, unit: ''}])
  const [recipeInfo, setRecipeInfo] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientsArr2 = ingredientsArr.map((ingredient) => {
      let string = `${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`
      return string;
    })
    const ingredientsStr = ingredientsArr2.join(',');
    console.log(ingredientsStr)
  }

  return (
    <div>
      <Header />
      <h1>New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <Ingredients ingredientsArr={ingredientsArr} setIngredientsArr={setIngredientsArr}></Ingredients>
        {/* <Info></Info> */}
        <button type="submit">Submit new recipe</button>
      </form>
    </div>
  );
}

export default NewRecipe;