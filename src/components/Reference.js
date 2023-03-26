import React from 'react';
import '../css/reference.css';

import FolksamLogo from '../images/company-logo/Folksam-logotyp-artikel_tcm5-2713.png';
import GjensidigeLogo from '../images/company-logo/Gjensidige-logo-horizontal-Nr.1.png';
import LFLogo from '../images/company-logo/LF.png';
import ModernaLogo from '../images/company-logo/Moderna-Logo-1200x800-1.jpg';
import AFALogo from '../images/company-logo/afa.svg';
import FolksamLogo2 from '../images/company-logo/folksam-logo-D597D991E1-seeklogo.com.png';
import CollectumLogo from '../images/company-logo/logo_collectum.jpg';
import PensionLogo from '../images/company-logo/pp-pension-1-1024x343.png';
import SkandiaLogo from '../images/company-logo/skandia-logo.gif';

function Reference() {
  return (
    <main className="reference">
      <section className="reference-intro">
        <div className="reference-intro-content">
          <h2>References</h2>
          <p>Tillammans med Centido kan organisationer bygga en stabil grund för sin verksamhet genom att dra nytta av vår tekniska expertis och vår förståelse för branschen. Kontakta oss idag för att se hur vi kan hjälpa just din organisation att möta sina utmaningar och uppnå sina mål.</p>
        </div>
      </section>
      <section className="reference-logos">
        <div className="logo-container">
          <img src={FolksamLogo} alt="Folksam Logo" className="reference-image" />
          <img src={GjensidigeLogo} alt="Gjensidige Logo" className="reference-image" />
          <img src={LFLogo} alt="LF Logo" className="reference-image" />
          <img src={ModernaLogo} alt="Moderna Logo" className="reference-image" />
          <img src={AFALogo} alt="AFA Logo" className="reference-image" />
          <img src={FolksamLogo2} alt="Folksam Logo 2" className="reference-image" />
          <img src={CollectumLogo} alt="Collectum Logo" className="reference-image" />
          <img src={PensionLogo} alt="Pension Logo" className="reference-image" />
          <img src={SkandiaLogo} alt="Skandia Logo" className="reference-image" />
        </div>
      </section>
    </main>
  );
}


export default Reference;
