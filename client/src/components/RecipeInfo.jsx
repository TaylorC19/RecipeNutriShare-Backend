import React from "react";
import "./RecipeInfo.css";

function RecipeInfo(props) {
  const { recipeInfo, setRecipeInfo } = props;

  /*
  {
    title: "",
    servings: "",
    hours: "",
    minutes: "",
    description: "",
    instructions: "",
    is_public: false
  }
  */

  const handleTitle = (e) => {
    const inputData = { ...recipeInfo };
    // const inputData = recipeInfo; // how are these different?
    inputData.title = e.target.value;
    setRecipeInfo(inputData);
  };

  const handleServings = (e) => {
    const inputData = { ...recipeInfo };
    inputData.servings = Number(e.target.value);
    setRecipeInfo(inputData);
  };

  const handleHours = (e) => {
    const inputData = { ...recipeInfo };
    inputData.hours = Number(e.target.value);
    setRecipeInfo(inputData);
  };

  const handleMinutes = (e) => {
    const inputData = { ...recipeInfo };
    inputData.minutes = Number(e.target.value);
    setRecipeInfo(inputData);
  };

  const handleDesciption = (e) => {
    const inputData = { ...recipeInfo }; 
    inputData.description = e.target.value;
    setRecipeInfo(inputData);
  };

  const handleInstructions = (e) => {
    const inputData = { ...recipeInfo }; 
    inputData.instructions = e.target.value;
    setRecipeInfo(inputData);
  };

  const handleIsPublic = (e) => {
    const inputData = { ...recipeInfo }; 
    inputData.is_public = !(inputData.is_public);
    setRecipeInfo(inputData);
  };

  return (
    <div className="info-container">
      <div>
        <label htmlFor="title">Title: </label>
        <input
          onChange={handleTitle}
          value={recipeInfo.title}
          type="text"
          id="title"
          placeholder="Title your recipe"
        />
      </div>

      <div>
        <label htmlFor="servings">servings: </label>
        <input
          onChange={handleServings}
          value={recipeInfo.servings}
          type="text"
          id="servings"
          placeholder="how many servings?"
        />
      </div>

      <div>
        <label htmlFor="hours-minutes">Cooking times: </label>
        <p>
          <input
            onChange={handleHours}
            value={recipeInfo.hours}
            type="text"
            id="hours"
            placeholder="hours"
          />{" "}
          :{" "}
          <input
            onChange={handleMinutes}
            value={recipeInfo.minutes}
            type="text"
            id="minutes"
            placeholder="minutes"
          />
        </p>
      </div>

      <div>
        <label htmlFor="description">Description:</label> <br />
        <textarea
          onChange={handleDesciption}
          placeholder="Add a desciption for your recipe"
          name="description"
          id="desciption"
          cols="60"
          rows="10"
        ></textarea>
      </div>

      <div>
        <label htmlFor="instructions">Instructions:</label> <br />
        <textarea
          onChange={handleInstructions}
          placeholder="Add the instructions for your recipe"
          name="instructions"
          id="instructions"
          cols="60"
          rows="10"
        ></textarea>
      </div>

      <div>
        <label htmlFor="is-public">Do you want your recipe to be public for others to see? </label>
        <input type="checkbox" onClick={handleIsPublic} />
        <p>By default, your recipe will be private. Check the above box for others to be able to see it.</p>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(recipeInfo);
        }}
      >
        Console.log inputData
      </button>
    </div>
  );
}

export default RecipeInfo;
