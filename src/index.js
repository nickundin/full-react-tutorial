import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// this file is responsible for mounting all the React components to the DOM
// takes the App component and renders it to the DOM inside the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);