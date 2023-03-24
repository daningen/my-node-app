import React from 'react';
import '../css/header.css';

function Header({ handlePageChange }) {

  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li><a href="#" onClick={() => handlePageChange('about')}>About Us</a></li>
          <li><a href="#" onClick={() => handlePageChange('expertise')}>Area of Expertise</a></li>
          <li><a href="#" onClick={() => handlePageChange('employer')}>Employer</a></li>
        </ul>
      </nav>

      <h3 className="logo">
        <span className="logo-cen">Cen</span>
        <span className="logo-tido">tido</span>
      </h3>
    </div>
  );
}

export default Header;
