import React from 'react';
import "./Footer.css";

function Footer(props) {
  const { text } = props;
  return (
    <div className='footer-div'>
      <p>{text}</p>
      <div>
        <p className='center'>Powered by:</p>
        <a href="https://www.nutritionix.com/"><img src="https://developer.nutritionix.com/assets/nutritionix_api.png" alt="Nutritionix API" /></a>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  text: "© 2023 Meal Prep Tracker"
}

export default Footer