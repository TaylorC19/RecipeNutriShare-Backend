import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SingleRecipe from "../components/SingleRecipe";
import { UserAuth } from "../components/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [singleRecipe, setSingleRecipe] = useState({
    ingredients: [],
    instructions: "",
  });

  useEffect(() => {
    const getHighlight = async () => {
      const highlight = await axios
        .get("/api/random-recipe")
        .then((result) => result.data);
      setSingleRecipe(highlight);
    };
    getHighlight();
  }, []);

  const handleLogOut = async () => {
    try {
      console.log("user", user);
      await logOut();
      // navigate('/signin')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <p>
        current user: {(user.user && user.user.email) || "No user detected"}
      </p>
      {Object.keys(user).length === 0 ? (
        <Link to="/signin">sign in here</Link>
      ) : (
        <button onClick={handleLogOut}>Logout</button>
      )}
      <h2>Highlighted Recipe</h2>
      <SingleRecipe singleRecipe={singleRecipe}></SingleRecipe>

      <Footer text="© 2023 Meal Prep Tracker" />
    </div>
  );
};

export default Home;
