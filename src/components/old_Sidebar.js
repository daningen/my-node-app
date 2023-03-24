import React from 'react';
import "../css/sidebar.css";

function Sidebar({ employer }) {
  return (
    <sidebar>
      <h2>{employer ? employer.name : "Sidebar"}</h2>
      <p>{employer ? employer.bio : "Hello, world Daningen!Daningennnnnn"}</p>
    </sidebar>
  );
}

export default Sidebar;
