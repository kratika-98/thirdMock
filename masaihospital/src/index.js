import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { ChakraProvider } from '@chakra-ui/react'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider> 
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();