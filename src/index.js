import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import './Global.css';
import { ThemeProvider } from '@mui/material/styles';
import neonTheme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={neonTheme}>
   <Router>
        <App />
      </Router>
      </ThemeProvider>
  </React.StrictMode>
);


