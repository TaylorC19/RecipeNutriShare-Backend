import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { UserAuth } from '../components/context/AuthContext';
import axios from 'axios';


const MyRecipes = () => {
  const [myRecipes, setMyRecipes] = useState([])
  const { user } = UserAuth();

  useEffect(()=>{
    const getRecipes = async() => {
      const userRecipes = await axios.get(`/api/recipes/${user.user.uid}`);
      console.log(userRecipes);
      return userRecipes;
    }

    const yourRecipes = getRecipes();

    setMyRecipes(yourRecipes);
  },[])

  useEffect(() => {
    console.log(myRecipes);
  }, [myRecipes])

  return (
    <div>
      <Header />
      <h1>Your Recipes</h1>

    </div>
  );
}

export default MyRecipes;