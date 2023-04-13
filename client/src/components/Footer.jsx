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

export default Footer