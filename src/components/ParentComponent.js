import React, { useState } from 'react';
import Employer from './Employer';
import Sidebar from './Sidebar';

import employer1 from "../images/employer1.jpg";
import employer2 from "../images/employer2.jpg";
import employer3 from "../images/employer3.jpg";
import employer4 from "../images/employer4.jpg";
import employer5 from "../images/employer5.jpg";
import employer6 from "../images/employer6.jpg";

const employers = [
  { id: 1, name: 'John Doe', imageUrl: employer1, text: 'John Doe is the CEO of our company.' },
  { id: 2, name: 'Jane Doe', imageUrl: employer2, text: 'Jane Doe is the COO of our company.' },
  { id: 3, name: 'Bob Smith', imageUrl: employer3, text: 'Bob Smith is the CFO of our company.' },
  { id: 4, name: 'Alice Johnson', imageUrl: employer4, text: 'Alice Johnson is the CTO of our company.' },
  { id: 5, name: 'David Brown', imageUrl: employer5, text: 'David Brown is the Chief Marketing Officer of our company.' },
  { id: 6, name: 'Sarah Lee', imageUrl: employer6, text: 'Sarah Lee is the Chief HR Officer of our company.' },
];

function ParentComponent() {
  const [selectedEmployer, setSelectedEmployer] = useState(null);

  const handleEmployerClick = (employer) => {
    setSelectedEmployer(employer);
  };

  return (
    <div className="container">
      <Employer employers={employers} onEmployerClick={handleEmployerClick} />
      <Sidebar selectedEmployer={selectedEmployer} />
    </div>
 

  );
}
export default ParentComponent;