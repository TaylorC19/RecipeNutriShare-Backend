import React from 'react'
import { Link } from 'react-router-dom'

function NewUser() {

  return (
    <div>
      <header>
      <p>Returning? <Link to='/signin'>Sign in here!</Link></p>

      </header>
      <h1>Meal Prep Tracker</h1>
      <p>This app will help you to track the calories of your meal prep recipes. Powered by the nutritionix API, simply enter in the ingredients for your recipe, and get the calorie information for your meal</p>
      <p>Interested? <Link to='/signup'>Sign up here!</Link></p>
    </div>
  )
}

export default NewUser