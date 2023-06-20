import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// this file is responsible for mounting all the React components to the DOM
// takes the App component and renders it to the DOM inside the root element
// App, the root component, sits as the top of the component tree
// further components are all nested below App.js (eg. Navar.js)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  //  </React.StrictMode>
);
