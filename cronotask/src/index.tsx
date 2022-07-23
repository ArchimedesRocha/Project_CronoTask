import React from 'react';
import ReactDOM from 'react-dom/client';
import mainStyle from './assets/sass/main.module.scss';
import App from './pages/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);