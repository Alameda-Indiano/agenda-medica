import React from 'react';
import { createRoot } from 'react-dom/client';
import 'devextreme/dist/css/dx.light.css';

import { App } from './App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

