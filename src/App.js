import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  //----------:Use_States:---------
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [themeNum, setThemeNum] = useState(1);
  const [btnCol, setBtnCol] = useState("secondary");

  //----------:Functions:---------
  let showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let toggleMode = (theme) => {
    // console.log("mode switch clicked");
    // if (mode === "dark")
    if (theme === "1") {
      setMode("light");
      document.body.style.backgroundColor = "rgb(248,249,260)";
      document.body.style.color = "black";
      document.title = "React App-Home";
      /*-------------------Alert----------------*/
      showAlert("success", "Light Theme has been enabled");
      setThemeNum(1);
      setBtnCol("secondary");
    }
    //  else
    if (theme === "2") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(33,37,51)";
      document.body.style.color = "white";
      document.title = "React App-Home|Dark Mode";
      /*------------------Alert-----------------*/
      showAlert("success", "Dark Theme has been enabled");
      setThemeNum(2);
      setBtnCol("light");
    }

    if (theme === "3") {
      setMode("dark");
      document.body.style.backgroundColor = "#080808";
      document.body.style.color = "#006400";
      document.title = "React App-Home|Dark Mode";
      showAlert("success", "Hacker Theme has been enabled");
      setThemeNum(3);
      setBtnCol("outline-success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextHelp" mode={mode} toggleTheme={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>

            <Route exact path="/">
              <Textform
                heading="Enter the text to analyze"
                mode={mode}
                showAlert={showAlert}
                num={themeNum}
                btnColor={btnCol}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
