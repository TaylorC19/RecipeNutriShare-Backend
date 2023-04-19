import React, { useState } from "react";
import Header from "../components/Header";
import Ingredients from "../components/Ingredients";
import RecipeInfo from "../components/RecipeInfo";
import "./NewRecipe.css";
import { UserAuth } from "../components/context/AuthContext";
import axios from "axios";

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { user } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ingredientsArr2 = ingredientsArr.map((ingredient) => {
        let string = `${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`;
        return string;
      });
      const ingredientsStr = ingredientsArr2.join(", ");
      
      if (recipeInfo.hours === '') {
        console.log('hit replace hours')
        const updateHours = { ...recipeInfo };
        updateHours.hours = 0;
        setRecipeInfo(updateHours);
      }
      if (recipeInfo.minutes === '') {
        const updateMinutes = { ...recipeInfo };
        updateMinutes.minutes = 0;
        setRecipeInfo(updateMinutes);
      }
  
      const queryBody = {
        query: ingredientsStr,
        uid: user.user.uid,
        recipeInfo: recipeInfo 
      };
  
      const recipeSubmission = await axios.post('/api/recipe', queryBody);
      
      setIsSubmitted(true);
    } catch (error) {
      alert('Your recipe could not be saved, please check that you are signed in and filled in the recipe correctly and try again.');
    }

  };

  return (
    <div>
      <Header />
      {isSubmitted ?
        (<h2>Thank you for submitting a recipe</h2>) :
      ( <div>
      <h1>New Recipe</h1>
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
      </div>)

    }
    </div>
  );
};

export default NewRecipe;
