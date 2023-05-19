import React from 'react';
import '../css/start.css';
import pens from '../images/centido/pens.png';
import ben from '../images/centido/ben-iwara.jpg';


// import analyze from '../images/centido/analyze-homepage-768x531.png';
import analyze from '../images/centido/analyze-homepage-768x531-Dan.png';
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
          {/* <button className="contact-btn">Contact</button> */}
        </div>
      </div>
      <div className="item3">
        {/* <img className="imgitem" src="https://source.unsplash.com/featured/300x202" /> */}
        {/* <img className="imgitem" src={pens} alt="pens" style={{ maxWidth: '300px' }} /> */}
        <p></p>
        {/* <h2>Hello</h2> */}
      </div>
      <div className="item4">
        <h1>Our philosophy</h1>
        
        <p>At Centido, we pride ourselves on our specialized expertise. Our team's high level
            of competence enables us to confidently run, develop, and manage projects where we know we can add real value and contribute to their success. We have strict recruitment standards, which means we grow slowly but maintain a high level of quality.
            Unlike many companies in our industry, we intentionally set 
            lower growth, profit, and occupancy rate goals, allowing us to invest more time in the training and development of our consultants. 
            We prioritize the benefits to our customers, and this focus drives everything we do.</p>
      </div>
      <div className="item5">
        <div className="card card1">
        <img src={analyze} alt="analyze" />
          <h4>We listen</h4>
          <p>Listening is the cornerstone of great relations. By truly understanding your needs and requirements, 
            we deliver impactful solutions that help you achieve your goals. We bring insights that add value to your business.</p>
            {/* <button className="contact-btn">Read more</button> */}

          
        </div>
        <div className="card card2">
        <img src={act} alt="act" />
          <h4>We are experts</h4>
          <p>At the core of our expertise lies a deep understanding of our clients' business and industry. 
            Our strength lies in providing insights and adding value by applying our knowledge and skills to deliver impactful results.</p>
          <p></p>
          {/* <button className="contact-btn">Read more</button> */}


            
         
        </div>
       
        <div className="card card3">
        <img src={listen} alt="listen" />
          <h4>We know your Industry</h4>
          <p>We specialize in gaining deep insights into our clients' businesses and industries. 
            Our expertise lies in adding value and delivering impactful results through the application of our knowledge and skills..</p>
            <p></p>
           
            {/* <button className="contact-btn">Read more</button> */}
        </div>
      </div>
    </div>
  );
};

export default Start;