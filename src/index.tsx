import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WindowProvider } from './contexts/WindowContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <WindowProvider>
      <App />
    </WindowProvider>
  </React.StrictMode>
);
