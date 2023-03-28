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
        <h2>Vi erbjuder</h2>
        <p>Centido AB erbjuder konsulttjänster som kombinerar expertis inom IT och affärsverksamhet i olika verksamheter med extra 
          djupt kunnande inom försäkringsbranschen. Vi hjälper våra klienter att möta dagens utmaningar genom att erbjuda 
          applikationsutveckling med stöd för agil utveckling utan att använda dessa specifika värdeord. 
          Vi har en bred och djup kunskap inom applikationsutveckling, vilket gör att vi kan erbjuda skräddarsydda lösningar 
          som möter våra klienters unika behov. </p>
        
        <p>Genom att kombinera vår tekniska expertis med vår förståelse för 
          försäkringsbranschen kan vi hjälpa organisationer att effektivisera sina processer och stärka sin verksamhet.
          Vi förstår vikten av att vara flexibla och anpassningsbara för att möta dagens snabbt föränderliga marknad. 
          Därför stödjer vi agil utveckling för att hjälpa våra klienter att vara redo att möta framtida utmaningar och 
          möjligheter.</p>
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
