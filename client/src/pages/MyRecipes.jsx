import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { UserAuth } from '../components/context/AuthContext';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';


const MyRecipes = () => {
  const [myRecipes, setMyRecipes] = useState([])
  const { user } = UserAuth();

  useEffect(()=>{
    const getRecipes = async () => {
      const userRecipes = await axios.get(`/api/recipes/${user.user.uid}`)
        .then(results => results.data);
      console.log(userRecipes);
      setMyRecipes(userRecipes)
      return 'allGood';
    }

    getRecipes();

    // setMyRecipes(yourRecipes);
  },[])

  useEffect(() => {
    console.log(myRecipes);
  }, [myRecipes])

  return (
    <div>
      <Header />
      <h1>Your Recipes</h1>
      {// console.log(myRecipes);
      myRecipes.map((recipe, index) => {
        return <RecipeCard recipeInfo={recipe} key={index} />
      })}

    </div>
  );
}

export default MyRecipes;