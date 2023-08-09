import React, { useEffect, useState } from "react";
import "./SingleRecipe.css";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
import axios from "axios";
import { ingrObj, recipeInfoType, singleRecipeObj } from "../global.t";
import Ingredients from "./Ingredients";
import RecipeInfo from "./RecipeInfo";


interface PropsInterface {
  singleRecipe: singleRecipeObj;
  setIsDefaultView?: (value: boolean) => void;
}

// const [ingredientsArr, setIngredientsArr] = useState<
//   { name: string; quantity: string; unit: string }[]
// >([{ name: "", quantity: "", unit: "" }]);
// const [recipeInfo, setRecipeInfo] = useState<recipeInfoType>({
//   title: "",
//   servings: "",
//   hours: "",
//   minutes: "",
//   description: "",
//   instructions: "",
//   is_public: false,
// });

function SingleRecipe(props: PropsInterface) {
  const { singleRecipe, setIsDefaultView } = props;
  const [isEditView, setIsEditView] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ingredientsArr, setIngredientsArr] = useState<{ name: string; quantity: string; unit: string }[]>([]);

  const navigate = useNavigate();
  const { user } = UserAuth();

  useEffect(() => {
    const ingredients: { name: string; quantity: string; unit: string }[] = [
      ...ingredientsArr,
    ];

    singleRecipe.ingredients.forEach((element) => {
      const ingredient: { name: string; quantity: string; unit: string } = {
        name: element.name,
        quantity: element.quantity.toString(),
        unit: element.unit,
      };

      ingredients.push(ingredient)
    })

    setIngredientsArr(ingredients);
  }, [singleRecipe.ingredients])
  
  // console.log(ingredientsArr);

  const recipeInfo: recipeInfoType = {
    title: singleRecipe.title,
    servings: singleRecipe.servings.toString(),
    hours: singleRecipe.hours.toString(),
    minutes: singleRecipe.minutes.toString(),
    description: singleRecipe.description,
    instructions: singleRecipe.instructions,
    is_public: singleRecipe.is_public,
  };

  return !isEditView ? (
    <div className="contents-div">
      <h2>Title: {singleRecipe.title}</h2>
      <div className="nutrition-info">
        <p>Servings: {singleRecipe.servings}</p>
        <p>Total calories: {singleRecipe.total_calories}</p>
        <p>
          Cook Time: {singleRecipe.hours ? singleRecipe.hours : 0} hr(s) and{" "}
          {singleRecipe.minutes ? singleRecipe.minutes : 0} min(s)
        </p>
      </div>
      <h4>Nutrition Information (per serving)</h4>
      <div className="nutrition-info">
        <p>Calories: {singleRecipe.calories_per_serving}</p>
        <p>Protein: {singleRecipe.total_protein / singleRecipe.servings}</p>
        <p>
          Carbohydrates:{" "}
          {singleRecipe.total_carbohydrates / singleRecipe.servings}
        </p>
      </div>
      <div className="full-recipe">
        <div className="ingredients">
          <p>Ingredients:</p>
          <ul>
            {singleRecipe.ingredients.map(
              (ingredient: ingrObj, index: number) => {
                return (
                  <li className="single-ingredient" key={index}>
                    {ingredient.quantity} {ingredient.unit} {ingredient.name} (
                    {ingredient.calories} calories)
                  </li>
                );
              }
            )}
          </ul>
        </div>

        <div className="recipe-info">
          <p>Description: {singleRecipe.description}</p>
          <p>Instructions:</p>
          {singleRecipe.instructions
            .split("\n")
            .map((element: string, index: number) => {
              return (
                <p key={index} className="instructions-p">
                  {element}
                </p>
              );
            })}
        </div>
      </div>
      {setIsDefaultView ? (
        <div>
          <button
            className="margin-right"
            onClick={(e) => {
              e.preventDefault();
              setIsDefaultView(true);
            }}
          >
            Back to all recipes
          </button>
          {user?.uid === singleRecipe.user_uid ? ( // button to delete a recipe
            <button
              className="margin-right"
              onClick={async (e) => {
                e.preventDefault();
                if (user) {
                  try {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this recipe?"
                      )
                    ) {
                      const request = await axios.delete(
                        `/api/delete-recipe/user/${user.uid}/recipe/${singleRecipe.id}`
                      );
                      if (request) {
                        navigate("/");
                      } else {
                        alert("Recipe could not be deleted.");
                      }
                    }
                  } catch (error) {
                    alert("Recipe could not be deleted.");
                  }
                }
              }}
            >
              Delete
            </button>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/public-recipes");
            }}
          >
            Checkout all recipes
          </button>
        </div>
      )}
    </div>
  ) : isSubmitted ? (
    <h2>Thank you for submitting a recipe, checkout "My Recipes" to see it.</h2>
  ) : (
    <></>
    // currently commented out while I build edit recipe endpoint
    // <div>
    //   <h1>New Recipe</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-container">
    //       <Ingredients
    //         ingredientsArr={ingredientsArr}
    //         setIngredientsArr={setIngredientsArr}
    //       ></Ingredients>
    //       <RecipeInfo
    //         recipeInfo={recipeInfo}
    //         setRecipeInfo={setRecipeInfo}
    //       ></RecipeInfo>
    //     </div>
    //     <button className="btn right" type="submit">
    //       Submit new recipe
    //     </button>
    //   </form>
    // </div>
  );
}

export default SingleRecipe;
