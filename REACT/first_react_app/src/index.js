import React from 'react';                        //2 librari
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));//Getting reference of div from index.html
root.render(
  <React.StrictMode>                  
    <App />
  </React.StrictMode>//for security
);


