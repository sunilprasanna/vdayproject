import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Puzzle1 from './puzzle1';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Puzzle1 />
  </React.StrictMode>
);

