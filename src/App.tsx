import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleDisplay from "./components/ToggleDisplay";
import MemoButton from "./components/MemoButton";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToggleDisplay value={toggle}/>
        <MemoButton onClick={() => setToggle(!toggle)} text="Toggle"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
