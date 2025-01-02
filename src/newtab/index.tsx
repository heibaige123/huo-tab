import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './layout/App';

import '@style/tailwind.less';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
