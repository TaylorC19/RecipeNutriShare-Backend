import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'
import { UserAuth } from "./context/AuthContext";

const Header = () => {
  const {user} = UserAuth();
  
  const navigate = useNavigate();

  return(
    <div className="header-div">
      <h1>Meal Prep Life</h1>
        {Object.keys(user).length !== 0
        ? 
      <div className="navigate-items">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/new-recipe')}>New Recipe</button>
        <button onClick={() => navigate('/my-recipes')}>My Recipes</button>
      </div> 
      :
      <div className="navigate-items">
        <button onClick={() => navigate('/signin')}>Sign In</button>
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
      }
    </div>
  )
}

export default Header;