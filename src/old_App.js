import React, { useState } from "react";
import "./css/global.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Employer2 from "./components/Employer2";


function App() {
  const [currentPage, setCurrentPage] = useState("content");
  console.log("Current page:", currentPage);


  const handleLinkClick = (page) => {
    setCurrentPage(page);
    console.log(`Clicked on ${page}`);
  };

  return (
    <div className="wrapper">
      <header className="header">
        <Header onLinkClick={handleLinkClick} />
        <ul>
          <li><a href="#" onClick={() => handleLinkClick('employer')}>Employer</a></li>
        </ul>
      </header>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <article className="content">
        {currentPage === "content" && <Content />} 
        {currentPage === "about" && <About />}
        {currentPage === "expertise" && <Expertise />}
        {currentPage === "employer" && <Employer2 />}

      </article>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
