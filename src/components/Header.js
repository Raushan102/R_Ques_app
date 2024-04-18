import React from 'react'; 

import logoImage from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header> 
      <img src={logoImage} alt="HeaderLogo" className="HeaderLogo" />
      <h2 className="headerTopic">ReactQuiz</h2>
    </header> 
  );
}
