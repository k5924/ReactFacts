import React from "react";
import Main from "./components/Main.js";
import Navbar from "./components/Navbar.js";
import "./assets/css/app.css";

export default function App(){

  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode(){
    setDarkMode(previousMode => !previousMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
    </div>
  );
}
