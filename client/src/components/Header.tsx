import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { UserAuth } from "./context/AuthContext";



const Header: React.FC = () => {
  const { user, logOut } = UserAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      console.log("user", user);
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="header-div">
      <h1 className="logo">Meal Prep Life</h1>
      
      {user ? (
        <div className="navigate-items">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/public-recipes")}>
            Browse public recipes
          </button>
          <button onClick={() => navigate("/new-recipe")}>New Recipe</button>
          <button onClick={() => navigate("/my-recipes")}>My Recipes</button>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      ) : (
        <div className="navigate-items">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/public-recipes")}>
            Browse public recipes
          </button>
          <button onClick={() => navigate("/signin")}>Sign In</button>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      )}
    </nav>
  );
};

export default Header;
