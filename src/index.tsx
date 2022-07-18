import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/_Index.scss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <div className="index">
          <App />
      </div>
  </React.StrictMode>
);
