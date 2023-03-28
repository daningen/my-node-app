import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import logo from '../images/centido/centido-logo-2.jpg';

function Header(props) {
  const [contentSelected, setContentSelected] = useState(true);
  const [employerSelected, setEmployerSelected] = useState(false);
  const [referenceSelected, setReferenceSelected] = useState(false);
  const [usSelected, setUsSelected] = useState(false);

  const handleContentClick = () => {
    setContentSelected(true);
    setEmployerSelected(false);
    setReferenceSelected(false);
    setUsSelected(false);
    props.handlePageChange('content');
  };

  const handleEmployerClick = () => {
    setContentSelected(false);
    setEmployerSelected(true);
    setReferenceSelected(false);
    setUsSelected(false);
    props.handlePageChange('employer');
  };

  const handleReferenceClick = () => {
    setContentSelected(false);
    setEmployerSelected(false);
    setReferenceSelected(true);
    setUsSelected(false);
    props.handlePageChange('reference');
  };

  const handleUsClick = () => {
    setContentSelected(false);
    setEmployerSelected(false);
    setReferenceSelected(false);
    setUsSelected(true);
    props.handlePageChange('us');
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
        </ul>
      </nav>
      <div className="border"></div>
    </header>
  );
}

export default Header;
