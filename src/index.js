import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { BrowserRouter } from "react-router-dom";

const AppWithRouting = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



ReactDOM.render(
    <AppWithRouting />,
  document.getElementById('root')
);

