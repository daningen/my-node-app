import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

function Header({ onLinkClick }) {
  const [expertiseClicked, setExpertiseClicked] = useState(false);

  const handleClick = () => {
    setExpertiseClicked(true);
    onLinkClick('expertise');
  };

  const handleAboutClick = () => {
    onLinkClick('about');
  }

  const handleEmployerClick = () => {
    onLinkClick('employer');
  }

  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#" onClick={handleAboutClick}>About Us</a></li>
          <li><a href="#" onClick={handleClick}>Area of Expertise</a></li>
          <li><Link to="/employer2">Our Team</Link></li>
        </ul>
      </nav>
      
      <h3 className="logo">
        <span className="logo-cen">Cen</span>
        <span className="logo-tido">tido</span>
      </h3>
    </header>
  );
}

export default Header;
