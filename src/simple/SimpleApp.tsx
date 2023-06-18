import React, {useState} from 'react';
import logo from '../logo.svg';
import '../App.css';
import ToggleDisplay from "./ToggleDisplay";
import MemoButton from "./MemoButton";
import {logRendering} from "../util/logging";

function SimpleApp() {
  const [toggle, setToggle] = useState(false);
  logRendering("SimpleApp");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToggleDisplay value={toggle}/>
        <MemoButton toggle={() => setToggle(!toggle)} text="Toggle"/>
      </header>
    </div>
  );
}

export default SimpleApp;
