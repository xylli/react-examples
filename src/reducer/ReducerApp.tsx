import React, {useReducer} from 'react';
import logo from '../logo.svg';
import '../App.css';
import ToggleDisplay from "./ToggleDisplay";
import MemoButton from "./MemoButton";
import {logRendering} from "../util/logging";
import toggleReducer, {defaultToggleState} from "./toggleReducer";

function ReducerApp() {
  const [state, dispatch] = useReducer(toggleReducer, defaultToggleState);
  logRendering("ReducerApp");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToggleDisplay value={state.toggle}/>
        <MemoButton toggleDispatch={dispatch} text="Toggle"/>
      </header>
    </div>
  );
}

export default ReducerApp;
