import React from 'react';
import ReactDOM from 'react-dom/client';
import '^style/tailwind.css';

import { App } from './layout/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
