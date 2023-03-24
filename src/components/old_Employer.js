import React from 'react';
import PropTypes from 'prop-types';
import employer1 from '../images/employer1.jpg';
import employer2 from '../images/employer2.jpg';
import employer3 from '../images/employer3.jpg';
import employer4 from '../images/employer4.jpg';
import employer5 from '../images/employer5.jpg';
import employer6 from '../images/employer6.jpg';

import employerData from '../data/EmployerData';

function Employer2({ onEmployerClick }) {
  const handleClick = (imageUrl) => {
    onEmployerClick(imageUrl);
  };

  const employerImages = [employer1, employer2, employer3, employer4, employer5,employer6 ];

  return (
    <main>
      <h2>Meet Our Team</h2>
      <div className="employer-grid">
        {employerData.map((employer, index) => (
          <div className="employer-img-container" key={index} onClick={() => handleClick(employer.imageUrl)}>
            <img src={employerImages[index]} alt={`Employer ${index}`} />
          </div>
        ))}
      </div>
    </main>
  );
}

Employer2.propTypes = {
  onEmployerClick: PropTypes.func.isRequired,
};

export default Employer2;
