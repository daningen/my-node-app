import React from 'react';
import image1 from '../images/random/image1.jpg';
import image2 from '../images/random/image2.jpg';
import image3 from '../images/random/image3.jpg';
import image4 from '../images/random/image4.jpg';
import '../css/content.css';

function MainContent() {
  const images = [image1, image2, image3, image4];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <main className="content">
      <div className="offer">
        <h2>We offer</h2>
        <p>Centido AB offers consulting services that combine expertise in IT and business operations across various industries
           with deep knowledge in the insurance sector. We help our clients tackle today's challenges by providing application
          development with agile support. 
          With extensive knowledge in application development, we offer tailored solutions that meet our clients' unique needs. </p>
        
        <p>By combining our technical expertise with an understanding of the insurance industry, we can assist organizations 
          in streamlining their processes and strengthening their operations. We recognize the importance of being 
          flexible and adaptable to meet the rapidly changing market demands. Therefore, we support agile development
           to help our clients be prepared for future challenges and opportunities.</p>

        <p>With confidence, trust, and a focus on selling, we can say:
        At Centido AB, we provide exceptional consulting services that blend IT and business expertise across various 
        industries. With our deep knowledge in the insurance sector, we are uniquely positioned to help our clients overcome challenges and achieve success. Our tailored application development solutions are designed to meet specific needs, ensuring efficiency and effectiveness. By leveraging our technical expertise and understanding of the insurance industry, we help organizations streamline processes, strengthen operations, and embrace the opportunities of tomorrow. 
        Trust us to deliver innovative solutions and be your reliable partner on the journey to success.</p>

      </div>

      <div className="image-container">
        <img src={randomImage} alt="Random image" className="image" />
        <p className="caption">Image caption</p>
      </div>

      <div className="contact">
        <p>Tillsammans med Centido kan organisationer bygga en stabil grund för sin verksamhet genom att dra nytta av vår tekniska 
          expertis och vår förståelse för branschen. Kontakta oss idag för att se hur vi kan hjälpa just din organisation att möta sina utmaningar och uppnå sina mål.</p>
      </div>
    </main>
  );
}

export default MainContent;
