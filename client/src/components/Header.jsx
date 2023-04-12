import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'

const Header = (props) => {
  
  const navigate = useNavigate();

  return(
    <div className="header-div">
      <h1>Meal Prep Life</h1>
      <div className="navigate-items">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/new-recipe')}>New Recipe</button>
        <button onClick={() => navigate('/my-recipes')}>My Recipes</button>
      </div>
    </div>
  )
}

export default Header;