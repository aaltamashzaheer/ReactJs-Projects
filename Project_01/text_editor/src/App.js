import Navbar from "./Navbar";
import CounterInterface from "./CounterInterface";
import React from "react";
import { useState } from "react";
import Alert from "./Alert";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FAQ from "./faq.js";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = (cls) => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(36, 37, 37)";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Analyzer - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Analyzer - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <CounterInterface showAlert={showAlert} mode={mode} />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
