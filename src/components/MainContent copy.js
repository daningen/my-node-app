import React from 'react';
import '../css/content.css';

function MainContent() {
  const images = [
    require('../images/random/image1.jpg').default,
    require('../images/random/image2.jpg').default,
    require('../images/random/image3.jpg').default,
    require('../images/random/image4.jpg').default,
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <main className="content">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '50%' }}>
          <h2>Våra tjänster</h2>
          <p>Centido AB erbjuder konsulttjänster som kombinerar expertis inom IT och affärsverksamhet i olika verksamheter med extra djupt kunnande inom försäkringsbranschen.
             Vi hjälper våra klienter att möta dagens utmaningar genom att erbjuda applikationsutveckling med stöd för agil 
             utveckling utan att använda dessa specifika värdeord. Vi har en bred och djup kunskap inom applikationsutveckling, vilket gör att vi kan erbjuda skräddarsydda lösningar som möter våra klienters unika behov. Genom att kombinera vår tekniska expertis med vår förståelse för försäkringsbranschen 
             kan vi hjälpa organisationer att effektivisera sina processer och stärka sin verksamhet.Vi förstår vikten av att vara flexibla och anpassningsbara för att möta dagens snabbt föränderliga marknad. Därför stödjer vi agil utveckling för att hjälpa våra klienter att vara redo att möta framtida utmaningar och möjligheter.
          </p>
          <p>Tillammans med Centido kan organisationer bygga en stabil grund för sin verksamhet genom att dra nytta av 
             vår tekniska expertis och vår förståelse för branschen. 
             Kontakta oss idag för att se hur vi kan hjälpa just din organisation 
             att möta sina utmaningar och uppnå sina mål.
          </p>
        </div>
        <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
          <img src={randomImage} alt="Random image" style={{ maxWidth: '100%', maxHeight: '500px' }} />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
