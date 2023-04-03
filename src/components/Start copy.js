import React from 'react';
import '../css/start.css';
import pens from '../images/centido/pens.png';
import ben from '../images/centido/ben-iwara.jpg';

const Start = () => {
  return (
    <main className="container">
      <div className="intro">
        <h1>A header with a selling short text about centido.</h1>
        <p>Followed by some strength about our knowledge of Banking and Insurance Industry sector.</p>
      </div>
      <div className="image-1">
        <img src={pens} alt="pens" style={{ maxWidth: '200px' }} />
      </div>
      <div className="more">
        <p>Just a one liner about centido</p>
      </div>
      <div className="image-2">
        <img src={ben} alt="ben iwara" style={{ maxWidth: '400px' }} />
      </div>
      <div className="text">
        <p>One sentence of the advantage of using our kind of konsultants.</p>
      </div>
    </main>
  );
};

export default Start;
