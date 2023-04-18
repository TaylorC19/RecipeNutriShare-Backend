import React, { useState } from "react";
import Header from "../components/Header";
import Ingredients from "../components/Ingredients";
import RecipeInfo from "../components/RecipeInfo";
import "./NewRecipe.css";
import { UserAuth } from "../components/context/AuthContext";

const NewRecipe = () => {
  const [ingredientsArr, setIngredientsArr] = useState([
    { name: "", quantity: "", unit: "" },
  ]);
  const [recipeInfo, setRecipeInfo] = useState({
    title: "",
    servings: "",
    hours: "",
    minutes: "",
    description: "",
    instructions: "",
    is_public: false
  });
  const { user } = UserAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientsArr2 = ingredientsArr.map((ingredient) => {
      let string = `${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`;
      return string;
    });
    const ingredientsStr = ingredientsArr2.join(", ");
    const queryBody = {
      query: ingredientsStr,
      uid: user.user.uid,
      recipeInfo: recipeInfo 
    };
    console.log(queryBody);
  };

  return (
    <div>
      <Header />
      <h1>New Recipe</h1>
      <p> hello\nuser</p>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <Ingredients
            ingredientsArr={ingredientsArr}
            setIngredientsArr={setIngredientsArr}
          ></Ingredients>
          <RecipeInfo
            recipeInfo={recipeInfo}
            setRecipeInfo={setRecipeInfo}
          ></RecipeInfo>
        </div>
        <button type="submit">Submit new recipe</button>
      </form>
    </div>
  );
};

export default NewRecipe;
