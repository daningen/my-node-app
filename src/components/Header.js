import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import About from './About';
import Content from './Content';
import Employer from './Employer';

function Header() {
  const [currentPage, setCurrentPage] = useState('content');

  const handleLinkClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li><Link to="/" onClick={() => handleLinkClick('content')}>Home</Link></li>
          <li><Link to="/about" onClick={() => handleLinkClick('about')}>About Us</Link></li>
          <li><Link to="/expertise" onClick={() => handleLinkClick('expertise')}>Area of Expertise</Link></li>
          <li><Link to="/employer" onClick={() => handleLinkClick('employer')}>Employer</Link></li>
        </ul>
      </nav>

      <h3 className="logo">
        <span className="logo-cen">Cen</span>
        <span className="logo-tido">tido</span>
      </h3>

      {currentPage === 'about' && <About />}
      {currentPage === 'expertise' && <Content />}
      {currentPage === 'employer' && <Employer />}
    </div>
  );
}

export default Header;
