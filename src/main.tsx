import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Render the main App component into the 'root' element in index.html
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
