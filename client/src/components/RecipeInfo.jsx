import React from "react";

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
  }
  */

  const handleTitle = (e) => {};

  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        onChange={handleTitle}
        type="text"
        id="title"
        placeholder="Title your recipe"
      />
    </div>
  );
}

export default RecipeInfo;
