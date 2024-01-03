import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import './Card.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <App/>
  </BrowserRouter>

  </React.StrictMode>
);