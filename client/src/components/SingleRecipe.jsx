import React from "react";

function SingleRecipe(props) {
  const { singleRecipe, setIsDefaultView } = props;
  return (
    <div>
      <h2>{singleRecipe.title}</h2>

      <button
        onClick={(e) => {
          e.preventDefault();
          setIsDefaultView(true);
        }}
      ></button>
    </div>
  );
}

export default SingleRecipe;
