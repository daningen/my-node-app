import "./css/global.css";
import React, { useState } from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [currentPage, setCurrentPage] = useState('content');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="wrapper">
      <Header handlePageChange={handlePageChange} />
      <div className="grid-container">
        {currentPage === 'about' ? <About /> : <Content />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
