import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"

function App() {
const [duration,setDuration] = useState(30)

const dec = ()=>{
  setDuration(duration+0.1)
}

const inc =()=>{
  setDuration(duration-0.1)
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" style={{animation:` App-logo-spin infinite ${duration}s linear`}}  alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="buttonCtn"><span onClick={inc} className="button">+</span><span onClick={dec} className="button">-</span></div>
        <span>Click to adjust speed</span>
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
