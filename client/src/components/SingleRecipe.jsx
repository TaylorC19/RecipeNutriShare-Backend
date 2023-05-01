import React from "react";
import "./SingleRecipe.css";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
import axios from "axios";

function SingleRecipe(props) {
  const { singleRecipe, setIsDefaultView } = props;
  const navigate = useNavigate();
  const { user } = UserAuth();

  return (
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
            {singleRecipe.ingredients.map((ingredient, index) => {
              return (
                <li className="single-ingredient" key={index}>
                  {ingredient.quantity} {ingredient.unit} {ingredient.name} (
                  {ingredient.calories} calories)
                </li>
              );
            })}
          </ul>
        </div>

        <div className="recipe-info">
          <p>Description: {singleRecipe.description}</p>
          <p>Instructions:</p>
          {singleRecipe.instructions.split("\n").map((element, index) => {
            return <p key={index} className="instructions-p">{element}</p>;
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
          {user.user !== undefined &&
          user.user.uid === singleRecipe.user_uid ? ( // button to delete a recipe
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
                        `/api/delete-recipe/user/${user.user.uid}/recipe/${singleRecipe.id}`
                      );
                      if (request) {
                        navigate("/my-recipes");
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
  );
}

export default SingleRecipe;
