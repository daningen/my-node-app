import React from 'react';
import '../css/start.css';
import pens from '../images/centido/pens.png';
import ben from '../images/centido/ben-iwara.jpg';


import analyze from '../images/centido/analyze-homepage-768x531.png';
import act from '../images/centido/act-homepage-768x531.png';
import listen from '../images/centido/Listen-homepage-768x531.png';

const Start = () => {
  return (
    <div className="grid-container-2">
      <div className="item1">
        <div className="Headline">
          <h1>Take advantage of our deep knowledge of your industry</h1>
        </div>
      </div>
      <div className="item2">
        <div>
          <h2>Challenges</h2>
          <p>By leveraging our expertise and understanding of today's client challenges, we listen to your needs and 
            provide tailored solutions that address your specific requirements. We can also provide you with 
            relevant use cases that showcase the success of our approach.</p>
          <ul className="a">
            <li>Hard working</li>
            <li>Building trust</li>
            <li>Robust solutions</li>
          </ul>
          <button className="contact-btn">Contact</button>
        </div>
      </div>
      <div className="item3">
        {/* <img className="imgitem" src="https://source.unsplash.com/featured/300x202" /> */}
        {/* <img className="imgitem" src={pens} alt="pens" style={{ maxWidth: '300px' }} /> */}
        <p></p>
        {/* <h2>Hello</h2> */}
      </div>
      <div className="item4">
        <h1>Something about Centido</h1>
        <h2>Something about Centido</h2>
        <h3>Something about Centido</h3>
      </div>
      <div className="item5">
        <div className="card card1">
        <img src={analyze} alt="analyze" />
          <h4>We listen</h4>
          <p>Working closely with our clients to gain a deep understanding business and industry, 
            and then apply knowledge and skills to deliver impactful results.</p>
            <button className="contact-btn">Read more</button>

            {/* By actively listening to our clients, we gain a deeper understanding of their needs and challenges, 
            which allows us to provide tailored solutions that truly meet their unique requirements. */}
          
        </div>
        <div className="card card2">
        <img src={act} alt="act" />
          <h4>Expertise</h4>
          <p>Working closely with our clients to gain a deep understanding business and industry, 
            and then apply knowledge and skills to deliver impactful results.</p>
            <button className="contact-btn">Read more</button>


            {/* <p>Our expertise lies in understanding today's client challenges and providing 
            tailored solutions that meet their needs. </p> */}
         
        </div>
       
        <div className="card card3">
        <img src={listen} alt="listen" />
          <h4>Industry</h4>
          <p>Working closely with our clients to gain a deep understanding business and industry, 
            and then apply knowledge and skills to deliver impactful results.</p>
            <button className="contact-btn">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Start;
