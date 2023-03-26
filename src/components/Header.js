import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import About from './About';
import Content from './MainContent';
import Employer from './Employer';
import Reference from './Reference';

function Header(props) {
  const [contentSelected, setContentSelected] = useState(true);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [referenceSelected, setReferenceSelected] = useState(false);
  const [employerSelected, setEmployerSelected] = useState(false);

  const handleContentClick = () => {
    setContentSelected(true);
    setAboutSelected(false);
    setReferenceSelected(false);
    props.handlePageChange('content');
  };

  const handleAboutClick = () => {
    setContentSelected(false);
    setAboutSelected(true);
    setReferenceSelected(false);
    props.handlePageChange('about');
  };

  const handleReferenceClick = () => {
    setContentSelected(false);
    setAboutSelected(false);
    setReferenceSelected(true);
    props.handlePageChange('reference');
  };

  const handleEmployerClick = () => {
    setContentSelected(false);
    setAboutSelected(false);
    setReferenceSelected(false);
    setEmployerSelected(true);
    props.handlePageChange('employer');
  };

  return (
    <header className="border">
  <nav>
    <Link to="/" className="logo">
      <h3>
        <span className="logo-cen">Cen</span>
        <span className="logo-tido">tido</span>
      </h3>
    </Link>
    <ul style={{ marginLeft: 'auto' }}>
      <li><Link to="/" onClick={handleContentClick} className={contentSelected ? "selected" : ""}>Content</Link></li>
      <li><Link to="/about" onClick={handleAboutClick} className={aboutSelected ? "selected" : ""}>About</Link></li>
      <li><Link to="/employer" onClick={handleEmployerClick} className={employerSelected ? "selected" : ""}>Employer</Link></li>
      <li><Link to="/references" onClick={handleReferenceClick} className={referenceSelected ? "selected" : ""}>References</Link></li>
    </ul>
  </nav>
  <div class="border">
</div>
</header>

  );
  
  
}

export default Header;
