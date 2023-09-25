import React from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );