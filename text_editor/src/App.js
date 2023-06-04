import './App.css';
import Navbar from './Navbar';
import CounterInterface from './CounterInterface';
import React from 'react'
import {useState} from 'react';
import Alert from './Alert';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor =  "rgb(36, 37, 37)";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Analyzer - Dark Mode";
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Analyzer - Light Mode";
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <CounterInterface showAlert={showAlert} mode={mode} />
    </>
    
  );


}

export default App;
