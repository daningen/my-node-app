import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import About from './About';
import MainContent from './MainContent';
import Employer from './Employer';
import Reference from './Reference';

function Header() {
  const [currentPage, setCurrentPage] = useState('content');

  const handleLinkClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => handleLinkClick('content')}>
              Hem
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => handleLinkClick('about')}>
              Om oss
            </Link>
          </li>
          <li>
            <Link to="/expertise" onClick={() => handleLinkClick('expertise')}>
              Expertis
            </Link>
          </li>
          <li>
            <Link to="/employer" onClick={() => handleLinkClick('employer')}>
              Anställda
            </Link>
          </li>
          <li>
            <Link to="/references" onClick={() => handleLinkClick('reference')}>
              Referenser
            </Link>
          </li>
        </ul>
      </nav>

      <h3 className="logo">
        <span className="logo-cen">Cen</span>
        <span className="logo-tido">tido</span>
      </h3>

      {currentPage === 'about' && <About />}
      {currentPage === 'expertise' && <MainContent />}
      {currentPage === 'employer' && <Employer />}
      {currentPage === 'reference' && <Reference />}
      {currentPage === 'content' && !['about', 'expertise', 'employer', 'reference'].includes(currentPage) && (
        <MainContent />
      )}
    </div>
  );
}

export default Header;
