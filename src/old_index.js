import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import './css/global.css';


console.log("React app is starting...");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Add cache-busting parameter to the URL
const script = document.createElement('script');
script.src = `/static/js/main.bc0a7b8d.chunk.js?v=${new Date().getTime()}`;
document.body.appendChild(script);

