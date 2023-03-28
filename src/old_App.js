import "./css/global.css";
import React, { useState } from 'react';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Reference from "./components/Reference";
import Footer from "./components/Footer";
import About from "./components/About";
import Employer from "./components/Employer";

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
        {currentPage === 'content' && <MainContent />}
        {currentPage === 'about' && <About />}
        {currentPage === 'reference' && <Reference />}
        {currentPage === 'employer' && <Employer />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
