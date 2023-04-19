import React from 'react'

function SingleRecipe(props) {
  const { singleRecipe } = props
  return (
    <div>
      <h2>{singleRecipe.title}</h2>
      
    </div>
  )
}

export default SingleRecipe