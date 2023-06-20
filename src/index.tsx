import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SimpleApp from './simple/SimpleApp';
import ReducerApp from "./reducer/ReducerApp";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<SimpleApp />*/}
      <ReducerApp/>
  </React.StrictMode>
);

