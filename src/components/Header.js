import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import logo from '../images/centido/centido-logo-2.jpg';

function Header(props) {
  const [contentSelected, setContentSelected] = useState(true);
  const [employerSelected, setEmployerSelected] = useState(false);
  const [referenceSelected, setReferenceSelected] = useState(false);
  const [usSelected, setUsSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);

  const handleContentClick = () => {
    setContentSelected(true);
    setEmployerSelected(false);
    setReferenceSelected(false);
    setUsSelected(false);
    setAboutSelected(false);
    props.handlePageChange('content');
  };

  const handleEmployerClick = () => {
    setContentSelected(false);
    setEmployerSelected(true);
    setReferenceSelected(false);
    setUsSelected(false);
    setAboutSelected(false);
    props.handlePageChange('employer');
  };

  const handleReferenceClick = () => {
    setContentSelected(false);
    setEmployerSelected(false);
    setReferenceSelected(true);
    setUsSelected(false);
    setAboutSelected(false);
    props.handlePageChange('reference');
  };

  const handleUsClick = () => {
    setContentSelected(false);
    setEmployerSelected(false);
    setReferenceSelected(false);
    setUsSelected(true);
    setAboutSelected(false);
    props.handlePageChange('us');
  };

  const handleAboutClick = () => {
    setContentSelected(false);
    setEmployerSelected(false);
    setReferenceSelected(false);
    setUsSelected(false);
    setAboutSelected(true);
    props.handlePageChange('about');
  };

  const handleStartClick = () => {
    props.handlePageChange('start');
  };

  return (
    <header className="border">
      <nav>
        <Link to="/" className="logo">
          <h3>
            <img src={logo} alt="Centido Logo 2" style={{ maxWidth: '100px' }} />
          </h3>
        </Link>
        <ul style={{ marginLeft: 'auto' }}>
          <li><Link to="/" onClick={handleContentClick} className={contentSelected ? "selected" : ""}>Content</Link></li>
          <li><Link to="/us" onClick={handleUsClick} className={usSelected ? "selected" : ""}>Us</Link></li>
          <li><Link to="/employer" onClick={handleEmployerClick} className={employerSelected ? "selected" : ""}>Employer</Link></li>
          <li><Link to="/references" onClick={handleReferenceClick} className={referenceSelected ? "selected" : ""}>References</Link></li>
          <li><Link to="/about" onClick={handleAboutClick} className={aboutSelected ? "selected" : ""}>About</Link></li>
          <li><a onClick={handleStartClick}>Start</a></li>
        </ul>
      </nav>
      <div className="border"></div>
    </header>
  );
}

export default Header;
