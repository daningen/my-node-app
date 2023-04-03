import React from 'react';
import employers from '../data/EmployerData';
import employerImages from '../data/employerImages';
import '../css/us.css';

const Us = () => {
  const shuffledEmployers = employers.sort(() => Math.random() - 0.5);
  const selectedEmployers = shuffledEmployers.slice(0, 2);

  return (
    <main className="us-container">
      <div className="us-image-container">
        {selectedEmployers.map((employer) => (
          <div key={employer.id} className="us-image">
            <div className="row">
              <div className="col-md-6">
                <img src={employerImages[employer.id]} alt={employer.name} />
              </div>
              <div className="col-md-6">
                <div className="us-info">
                  <div className="card us-card">
                    <div className="card-body us-card-body">
                      <h5 className="us-name">{employer.name}</h5>
                      <p className="us-description">{employer.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Us;
