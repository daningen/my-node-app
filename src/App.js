import "./css/global.css";
import React, { useState } from 'react';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Reference from "./components/Reference";
import Footer from "./components/Footer";
import About from "./components/About";
import Employer from "./components/Employer";
import Us from "./components/Us";
import Start from "./components/Start";

function App() {
  const [currentPage, setCurrentPage] = useState('content');
  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log('currentPage:', currentPage);

  return (
    <div className="wrapper">
      <Header handlePageChange={handlePageChange} />
      <div className="grid-container">
        {currentPage === 'start' && <Start />}
        {currentPage === 'content' && <MainContent />}
        {currentPage === 'about' && <About />}
        {currentPage === 'reference' && <Reference />}
        {currentPage === 'employer' && <Employer />}
        {currentPage === 'us' && <Us />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
