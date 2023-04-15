import React from 'react';
import "./Footer.css";

function Footer(props) {
  const { text } = props;
  return (
    <div className='footer-div'>
      <p>{text}</p>
    </div>
  )
}

Footer.defaultProps = {
  text: "© 2023 Meal Prep Tracker"
}

export default Footer