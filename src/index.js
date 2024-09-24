import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // Ensure this line is present
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/AppContext'; // Import AppProvider

ReactDOM.render(
  <React.StrictMode>
    <AppProvider> {/* Wrap App with AppProvider */}
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
